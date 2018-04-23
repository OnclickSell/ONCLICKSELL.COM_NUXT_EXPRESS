import Validations from './res/rules'
import messages from './res/messages'

let allErrors = {}
let allRules = null
let allValues = null


const validate = (rules, values) => {
     // Fetch all nested rules and values and store them in one single object
     allRules = fetchNestedProperties(rules)
     allValues = fetchNestedProperties(values)

     //Loop through each rule and match it agains the value

     for(let rule in allRules) {
         //Extract the value of the rule from the actual rule
         ParseRule(allRules[rule]).map(EachRule => {
             Match({...EachRule, field: rule}, allValues[rule])
         })
     }

     if(IsErrorsClean(allErrors)) return {}
     return {error: allErrors}
}


const fetchNestedProperties = (data) => {
    let values = {}
    let counter = 0
    const runTheLoop = (object) => {
        ++counter
        for(let key in object) {
            if(object[key] === Object(object[key])) {
            const nested_object = object[key]
            runTheLoop(nested_object)
            continue
            }
            if(Object.keys(values).indexOf(key) !== -1) values[key + '_' + counter] = object[key]
            else values[key] = object[key]
        }
    }
    runTheLoop(data)
    return values
}





const ParseRule = (rule) => {
    let rules = {}
    if(rule.indexOf('|') !== -1) {
      try {
        rules = rule.split('|').map(R => rules[R] = {rule: R, value: ''})
        rules.map((R, index) => {
            R.rule.indexOf(':')
            if(R.rule.indexOf(':') !== -1) {
                let propsAndValue = R.rule.split(':')
                rules[index].rule = propsAndValue[0]
                rules[index].value = propsAndValue[1]
            }
        })
      }catch(err) {throw err}
        
    }else {
        rules = [{rule: rule, value: ''}]
    }

    return rules

}

const Match = (rule, value) => {
    const EachRule = rule.rule
    if(!Validations[EachRule](value, rule.value)) {
        AddError(rule)
    }
}


const AddError = rule => {
    if(allErrors[rule.field] !== undefined)
        allErrors[rule.field] = [...allErrors[rule.field], messages[rule.rule](rule)]
    else
        allErrors[rule.field] = [messages[rule.rule](rule)]
}  

const IsErrorsClean = errorsObject => Object.keys(errorsObject).length === 0





export default validate



