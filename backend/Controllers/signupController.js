import UserModel from '../Models/users.js'
import bcrypt from 'bcrypt'

const   signup = async(req , res ) => {

    try {
        const {name,email,password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409).json({message:"User Already Found",sucess:false});
        }        
        const Hashpassword = await bcrypt.hash(password,10);
        const newUSer = new UserModel({name,email,password:Hashpassword});
        await newUSer.save();
        res.status(201).json({
            message:'Sigh-Up Sucessfully',
            sucess:true
        })
    } catch (error) {
        // console.log(error)
         res.status(500).json({
            message:'Internel server error ' + String(error),
            sucess:false
        })
    }

}

export default signup;