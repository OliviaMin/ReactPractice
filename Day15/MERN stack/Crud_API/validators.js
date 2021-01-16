const {body}=require('express-validator/check');

exports.hasDescription=body('description')
.isLength({min:5})
.withMessage("Description is Required, min length is 5");