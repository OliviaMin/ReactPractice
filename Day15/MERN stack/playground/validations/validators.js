const {body}=require('express-validator/check');

exports.hasName=body('name')
.isLength({min:5})
.withMessage("Name is Required, min length is 5");