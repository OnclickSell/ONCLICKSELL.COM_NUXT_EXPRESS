
const db = require('../database/config');

exports.rules_list = [
    'min',
    'max',
    'required',
    'url',
    'password',
    'email',
    'unique'
];



exports.messages = {
    min: (field_name, value) => {
        return 'The ' + field_name + ' field must be at least ' + value + ' characters'
    },
    max: (field_name, value) => {
        return 'The ' + field_name + ' field cannot be more than ' + value + ' characters'
    },
    required: (field_name) => {
        return 'The ' + field_name + ' field cannot be left empty'
    },
    url: (field_name) => {
        return 'The ' + field_name + ' field is not a valid url'
    },
    email: (field_name) => {
        return 'The ' + field_name + ' field does not contain a valid email address'
    },
    password: (field_name) => {
        return 'The ' + field_name + ' field does not contain a valid password'
    },
    unique: (field_name, value) => {
        return 'The value already exists in the database'
    },
}




exports.RulesFunctions = {
    
        required: function(data) {
            return new Promise((resolve, reject) => {
                if(data.length >= 1) {
                    resolve('passed')
                } else {
                    reject('failed')
                }
            })
        },
  
        max: function(data, value) {
            return new Promise((resolve, reject) => {
                if(data.length <= value){
                    resolve('passed')
                }else {
                    reject('failed')
                }
            })
        },
  
        min: function(data, value) {
            return new Promise((resolve, reject) => {
                if(data.length >= value){
                    resolve('passed')
                }else {
                    reject('failed')
                }
            })
        },
   
        email: function(data) {
            return new Promise((resolve, reject) => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {  
                    resolve('passed')
                } else { 
                    reject('passed')
                }  
            })
        },
   
        password: function(data) {
            return new Promise((resolve, reject) => {
                let passw=  /^[A-Za-z]\w{7,14}$/; 
                if (data.match(passw)) {  
                    resolve('passed')
                } else { 
                    reject('failed')
                }  
            })
        },
   
        url: function(data) {
            return new Promise((resolve, reject) => {
                let urlRegex=  /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
                if (urlRegex.test(data)) {  
                    resolve('passed')
                } else { 
                    reject('failed')
                }  
            })
        },
        unique: function(data, value) {
            return new Promise((resolve, reject) => {
                db(value).where('email', data).select('id')
                .then(result => {
                    if (result.length == 0) { 
                        resolve('passed')
                    } else { 
                        reject('failed')
                    }
                })
                .catch(err => {
                    console.log(err)
                    reject('failed')
                })
            })
        }
}


