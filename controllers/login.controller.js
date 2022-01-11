import  jwt  from "jsonwebtoken";
import {SECRET_KEY} from "../config/config.js"


export const validateCredentials = (req, res) => {

    const credentials = req.body;

    if (credentials.user === 'test' && credentials.password === 'test'){

        const payload ={
            user: credentials.user,
            userName: 'Test User',
            mail: 'test_user@gmail.com',
            role: 'admin'
        }

        const token = jwt.sign(payload,SECRET_KEY);

        res.json({
            status: 'OK',
            token: token
        })


    }else{
        res.json({
            status: 'NOT OK',
            message: 'Invalid user or password'
        })
    }


}