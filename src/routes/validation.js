// Validation
const Joi = require("joi");

// Register validation
const registerValidation = (data) => {
  // Your code goes here
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  // Lets validate the user's data
  return schema.validate(data);
};
// Login validation
const loginValidation = (data) => {
  // Your code goes here
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  // Lets validate the user's data
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
