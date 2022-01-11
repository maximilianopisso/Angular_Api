
import { addToCart, getCart, removeFromCart } from "./controllers/cart.controller.js"
import { getTest } from "./controllers/test.controller.js"
import { validateCredentials } from "./controllers/login.controller.js"
import  jwt  from "jsonwebtoken";
import {SECRET_KEY} from "./config/config.js";
import express from express;

export const routes = (app) =>{
    
    app.route('/api/test')
    .get(getTest)

    app.route('/api/cart')
    .get(getCart)
    .post(addToCart)
    .delete(removeFromCart)  

    app.route('/api/login')
    .post(validateCredentials)
}

const checkToken = express.Router(); 
checkToken.use((req, res, next) => {
    const token = req.headers['Authorization'];
	
    if (token) {
      jwt.verify(token, SECRET_KEY, (err, decoded) => {      
        if (err) {
            return res.json({ 
                status: 'NOK',
                mensaje: 'Token inválido' 
            });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
        status: 'NOK',
        mensaje: 'Token no provisto' 
      });
    }
 });


// const getTest = (req,res) =>{
//     res.send({
//         message: 'api/test is working'
//     })
// }
