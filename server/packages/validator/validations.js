export default class validations {
    required(value) {
        return value.length > 0
    }

    min(value, validation) {
        return value.length >= validation
    }

    max(value, validation) {
        return value.length <= validation
    }

    email(value) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
    }

    password(value) {
        let passw =  /^[A-Za-z]\w{7,14}$/; 
        if (value.match(passw)) 
            return true
        else 
            return false
    }

    url(value) {
        return value.length <= validation
    }
}