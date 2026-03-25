const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),

    category: Joi.string()
      .valid("mountains","arctic","farms","deserts","beaches","cities")
      .required(),

    image: Joi.any() // simplest fix
    .optional()
  }).required()
});