import Joi from 'joi'

const signUpValidation = (req,res,next) =>{
    const Schema = Joi.object({
        name:Joi.string().min(3).max(100).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(4).max(15).required(),

    });
    const {error} = Schema.validate(req.body);
    if (error) {
        return res.status(400).json({message:"Bad Request", error})
    } 
    next();
}

export default signUpValidation;
