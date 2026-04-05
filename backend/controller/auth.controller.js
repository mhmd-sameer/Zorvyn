import { loginService, registerService } from "../service/auth.service.js";


export const registerUser = async(req, res) =>{
    try{
        const user = await registerService(req.body);

        res.status(200).json({
            message: "User registered Successfully",
            user
        });
    }
    catch(err){
        return res.status(400).json({message: err.message});
    }
}


export const loginUser = async(req, res) =>{
    try{
        const token = await loginService(req.body);

        res.status(200).json({
            message: "Login Successful",
            token
        })
    }
    catch(err){
        return res.status(400).json({message: err.message});
    }
}
