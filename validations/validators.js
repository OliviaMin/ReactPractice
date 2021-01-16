const {body}=require('express-validator/check');

exports.hasDescription=body('description')
.isLength({min:5})
.withMessage("Description is Required, min length is 5");

exports.isEmail=body('email')
.isEmail()
.withMessage("EMail field must have correct email");

exports.hasPassword=body('password')
.exists()
.withMessage("Password can't be empty!")

exports.hasName=body('name')
.isLength({min:5})
.withMessage("name is Required, min length is 5");