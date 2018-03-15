import Validations from './validations'

export default class Validator {
    errors = {}
    rules = ''
    values = ''
    messages = {
        required: (value) => {
            return 'The ' + value.field + ' is required'
        },
        email: (value) => {
            return 'The ' + value.field + ' does not contain a valid Eamil Address'
        },
        password: (value) => {
            return 'The ' + value.field + ' does not contain a valid password'
        },
        url: (value) => {
            return 'The ' + value.field + ' does not contain a valid password'
        },
        min: (value) => {
            return 'The ' + value.field + ' field must be more than ' + value.value + ' characters'
        },
        max: (value) => {
            return 'The ' + value.field + ' field must be less than ' + value.value + ' characters'
        }
    }

    validate(rules, values) {
        // Fetch all nested rules and store them in one single object
        this.rules = this.Fetch(rules)
        // Fetch all nested values and store them in one single object
        this.values = this.Fetch(values)

        //Loop through each rule and match it agains the value

        for(let rule in this.rules) {
            //Extract the value of the rule from the actual rule
            this.ParseRule(this.rules[rule]).map(EachRule => {
                this.Match({...EachRule, field: rule}, this.values[rule])
            })
        }

        if(this.IsErrorsClean(this.errors)) {
            return {status: true, errors: ''}
        }else { return {status: false, errors: this.errors} }


    }

    ParseRule(rule) {
        let rules = {}
        if(rule.indexOf('|') !== -1) {
            rules = rule.split('|').map(R => rules[R] = {rule: R, value: ''})
            rules.map((R, index) => {
                R.rule.indexOf(':')
                if(R.rule.indexOf(':') !== -1) {
                    let propsAndValue = R.rule.split(':')
                    rules[index].rule = propsAndValue[0]
                    rules[index].value = propsAndValue[1]
                }
            })
        }else {
            rules = [{rule: rule, value: ''}]
        }

        return rules

    }

    Match(rule, value) {
        const validations = new Validations()
        const EachRule = rule.rule
        if(!validations[EachRule](value, rule.value)) {
            this.AddError(rule)
        }
    }

    AddError(rule) {
        this.errors[rule.field] = this.messages[rule.rule](rule)
    }

    IsNested(value) {
        return value === Object(value);
    }

    Fetch(object) {
        let nestedProperties = null
        let values = {}
        for(let prop in object) {
            if(this.IsNested(object[prop])) {
                nestedProperties = {...this.AttachParentName({...object[prop]}, prop), ...nestedProperties}
                continue
            }
            values[prop] = object[prop]
        }

        if(nestedProperties != null || undefined) {
            values = {...this.Fetch(nestedProperties), ...values }
            
        }
            
        return values
    }

    IsErrorsClean(errorsObject) {
        return Object.keys(errorsObject).length === 0;
    }

    AttachParentName(childProperties, parentName) {
        let ModifiedChildProperties = {}
        for(let child in childProperties) {
            let ModifiedName = parentName + '_' + child
            ModifiedChildProperties[ModifiedName] = childProperties[child]
        }

        return ModifiedChildProperties
    }
}

