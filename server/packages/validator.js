
let that
module.exports =  function() {
    this.applyRule = {
        required: (value, fieldName) => {
            return value.length > 0
        },
        email: (value, fieldName) => {
            return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
        },
        password: (value, fieldName) => {
            let passw =  /^[A-Za-z]\w{7,14}$/; 
                if (value.match(passw)) {  
                    return true
                } else { 
                    return false
                }  
        },
        min: (value, fieldName) => {
            return value.length > 0
        },
        max: (value, max) => {
            return value.length <= max
        },
        min: (value, min) => {
            return value.length >= min
        }
    },
    this.fields = [],
    this.errors = {},
    this.errorList = {
        required: (fieldName, value) => {
            that.errors[fieldName] = "The " + fieldName + " field is required";
        },
        email: (fieldName, value) => {
            that.errors[fieldName] = "The " + fieldName + " field does not contain a valid email address";
        },
        password: (fieldName, value) => {
            that.errors[fieldName] = "The " + fieldName + " field does not contain a valid password";
        },
        max: (fieldName, value) => {
            that.errors[fieldName] = "The " + fieldName + " must not be greater than " + value + " characters";
        },
        min: (fieldName, value) => {
            that.errors[fieldName] = "The " + fieldName + " must not be smaller than " + value + " characters";
        }
    },
    this.validate = function(validationRules, values) {
        that = this
        that.errors = {}
        return new Promise((resolve, reject) => {
           
            //define all variables
            let fieldsIndex, ruleIndex, singleRule, singleValue, EachRule, singleField, ruleValue

            // //Get the keys and put inside fields array
            this.fields = Object.keys(validationRules);

            // //Loop throgth keys
            for(fieldsIndex = 0; this.fields.length > fieldsIndex; fieldsIndex++) {

                singleField = this.fields[fieldsIndex]

                // fetch each set of rules from user defined rules
                EachRule = validationRules[singleField]

                //loop throgh each set of rules
                for(ruleIndex = 0; EachRule.length > ruleIndex; ruleIndex++) {

                    singleRule = EachRule[ruleIndex]
                    singleValue = values[singleField]

                    if(singleRule.indexOf(':') !== -1) {
                        ruleValue = singleRule.split(':')[1];
                        singleRule = singleRule.split(':')[0];
                    }

                     // if rule failed add the corresponding error message to errors list
                    if(!this.applyRule[singleRule](singleValue, ruleValue)) {
                       this.errorList[singleRule](singleField, ruleValue)
                    }
                    
                }
            }
            // reject if any error message exists
            newErrors = Object.keys(that.errors)
            if(!newErrors.length > 0) {
                resolve()
            } else { reject(that.errors) }
        })
    }
}


// let ExtractedRules = [...rules.split('|')];