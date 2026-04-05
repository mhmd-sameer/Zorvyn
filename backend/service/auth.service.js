import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

export const loginService = async({email, password}) =>{

        const user = await User.findOne({email});

        if(!user){
            throw new Error("Invalid Credentials");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            throw new Error("Invalid Credentials");
        }
        const token = jwt.sign(
            {id:user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );

        return token;
}



export const registerService = async({name, email, password, role}) =>{

        const existingUser = await User.findOne({email});

        if(existingUser){
            throw new Error("User already Exists");
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password : hashedPassword,
            role
        });

        return user;
}

