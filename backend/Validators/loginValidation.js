import Joi from 'joi'

const loginValidation = (req,res,next) =>{
    const Schema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(4).max(15).required(),
    });
    const {error} = Schema.validate(req.body);
    if (error) {
        return res.status(400).json({message:"Please Provide Right Credentials.", error})
    } 
    next();
}

export default loginValidation;