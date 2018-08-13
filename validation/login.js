const Validator = require('validator');
const validateEmail = require("email-validator");
const isEmpty = require('../validation/is-empty')


module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    
    //validate format of data
    if (!validateEmail.validate(data.email)) {
        errors.email = 'Email is invalid'
    }
    //check lengths of fields
    if (data.password.length < 6 && !data.password == 0) {
        errors.password = 'Passwors must be at least 6 characters';
    }
    //check if some field is empty
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required'
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}