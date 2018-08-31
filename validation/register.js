const Validator = require('validator');
const validateEmail = require("email-validator");
const isEmpty = require('../validation/is-empty')


module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';
    data.role = !isEmpty(data.role) ? data.role : '';
    data.permissions = !isEmpty(data.permissions) ? data.permissions[0] : '';

    //validate format of data
    if (!validateEmail.validate(data.email)) {
        errors.email = 'Email is invalid'
    }
    //check if some field is empty
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required'
    }
    if (Validator.isEmpty(data.lastname)) {
        errors.lastname = 'Lastname field is required'
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required'
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password field is required'
    }
    if (Validator.isEmpty(data.role)) {
        errors.role = 'Role field is required'
    }
    if (Validator.isEmpty(data.permissions)) {
        errors.permissions = 'Permissions field is required'
    }
    // //validate password confirmation
    if (!Validator.equals(data.password, data.password2)) {
        errors.password = 'Passwords must match'
    }
    //check lengths of fields
    if (data.lastname.length < 2 || data.lastname.length > 30) {
        if (!data.lastname == 0) {
            errors.lastname = 'Lastname must be between 2 and 30 characters';
        }
    }

    if (data.name.length > 30) {
        if (!data.name == 0) {
            errors.name = 'Name must be between 1 and 30 characters';
        }
    }

    if (data.password.length < 6 && !data.password == 0) {
        errors.password = 'Passwors must be at least 6 characters';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}