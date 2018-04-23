const validations =  {
    required: value =>  value !== null || '' || "",

    min: (value, validation) => value.length >= validation,


    max: (value, validation) => value.length <= validation, 

    email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)),

    password: value => {
        let passw =  /^[A-Za-z]\w{7,14}$/; 
        if (value.match(passw)) 
            return true
        else 
            return false
    },

    url: value => value.length <= validation
}

export default validations