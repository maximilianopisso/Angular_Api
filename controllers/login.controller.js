import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/config.js"


const usersContent = [
    {
        id: 1,
        nombre: "Maximiliano",
        apellido: "Pisso",
        direccion: "Rosario 1234",
        movil: "+54 3416346585",
        email: "maximiliano.pisso@gmail.com",
        password: "12345678",
        role: "admin"
    },

    {
        id: 2,
        nombre: "User",
        apellido: "Perez",
        direccion: "Corrientes 154",
        movil: "+54 3416556688",
        email: "user@gmail.com",
        password: "11223344",
        role: "user"
    }
];

//METODO GET - TRAE TODOS LOS USUARIOS
export const getUsers = (req, res) => {
    res.send(usersContent);
}

// METODO POST - VALIDACION DE USUARIOS
export const validateCredentials = (req, res) => {

    const credentials = req.body;
    const indexUser = usersContent.findIndex(user => user.email === credentials.email)
    
    console.log("Index:",indexUser);
    console.log("Credenciales HTML", credentials.email, credentials.password);

    if (indexUser >= 0 && usersContent[indexUser].password === credentials.password) {
        console.log("USER VALIDO");
        const payload = {
            email: usersContent[indexUser].email,
            nombre: usersContent[indexUser].nombre,
            apellido: usersContent[indexUser].apellido,
            password: usersContent[indexUser].password,
            role: usersContent[indexUser].role
        }

        const token = jwt.sign(payload, SECRET_KEY);

        res.json({
            status: 'OK',
            token: token,
            message: 'Usuario Validado',
        })


    } else {
        console.log("USER NO VALIDO");
        res.json({
            status: 'NOT OK',
            message: 'Invalid user or password'
        })
    }
}

export const addUser = (req, res) => {
    const userToAdd = req.body;
    const index = usersContent.findIndex(user => user.email === userToAdd.email) 
      
    if (index < 0) {
        
        usersContent.push({
            id: usersContent.length+1,
            nombre: userToAdd.nombre,
            apellido: userToAdd.apellido,
            direccion: userToAdd.direccion,
            movil: userToAdd.movil,
            email: userToAdd.email,
            password: userToAdd.password,
            role: "user"
        });  

        res.send({
            status: "OK",
            description: "ADD USER",
            usersContent
        });
    } else {
        res.send({
            status: "NOT OK",
            description: "NOT ADDING - USER ALLREADY EXIST",
            usersContent
        });
    }
}





