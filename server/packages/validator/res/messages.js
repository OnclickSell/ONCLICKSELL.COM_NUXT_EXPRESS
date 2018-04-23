const messages = {
    required: value =>  `The ${value.field} is required`,
    email: value =>  `The ${value.field} does not contain a valid Eamil Address`,
    password: value =>  `The ${value.field} does not contain a valid password`,
    url: value =>  `The ${value.field} does not contain a valid password`,
    min: value =>  `The ${value.field}  must be more than ${value.value} characters`,
    max: value =>  `The ${value.field}  must be less than ${value.value} characters`,
}

export default messages