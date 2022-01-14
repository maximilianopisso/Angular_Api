
import { addToCart, clearCart, getCart, removeFromCart } from "./controllers/cart.controller.js"
import { getTest } from "./controllers/test.controller.js"
import { addUser, getUsers, validateCredentials } from "./controllers/login.controller.js"
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "./config/config.js";
import express from "express";

export const routes = (app) => {

    app.route('/api/test')
        .get(getTest)

    app.route('/api/cart')
        .get(checkToken, getCart)                 // obtiene contenido del carrito
        .post(checkToken, addToCart)              // agrega una movie al carrito
        .delete(checkToken, removeFromCart)       // elimina una movie del carrito

    app.route('/api/cart/clear')  // metodo para vaciar carrito
        .delete(clearCart)

    app.route('/api/login')
        .get(getUsers)                // obtiene listado de usuarios
        .post(addUser)                // agrega un ususario nuevo

    app.route('/api/login/validate')
        .post(validateCredentials)   // metodo para realizar validacion de usuario contra la API
}


const checkToken = express.Router();  
checkToken.use((req, res, next) => {

    let token = req.headers['authorization'];
    token = token.replace('Bearer ', '')

    if (token) {
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.json({
                    status: 'NOT - OK',
                    mensaje: 'Token inválido'
                });
            } else {
               
                req.decoded = decoded;    
                next();
            }
        });
    } else {
        res.send({
            status: 'NOT - OK',
            mensaje: 'Token no provisto'
        });
    }
});


// const getTest = (req,res) =>{
//     res.send({
//         message: 'api/test is working'
//     })
// }
