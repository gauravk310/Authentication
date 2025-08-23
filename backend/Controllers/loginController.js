import UserModel from '../Models/users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import  dotenv  from 'dotenv'
dotenv.config();

const   login = async(req , res ) => {

    try {
        const {email,password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(403).json({message:"User Not Found",sucess:false});
        }      
        const isPassEqual = await bcrypt.compare(password,user.password);
        if (!isPassEqual) {
                return res.status(403).json({message:"Wrong Password",sucess:false});
        } 
        const jwttoken = jwt.sign({
            email:user.email,
            _id:user._id
        },process.env.JWT_SECRET,{expiresIn:'24h'})

        res.status(200).json({
            message:'Log-In Sucessfully',
            sucess:true,
            jwttoken,
            email,
            name:user.name
        })
    } catch (error) {
        // console.log(error)
         res.status(500).json({
            message:'Internel server error ' + String(error),
            sucess:false
        })
    }

}

export default login;