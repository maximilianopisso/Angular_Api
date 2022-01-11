const cartContent = [];

export const getCart = (req,res) =>{
    res.send(cartContent);
}

//NO QUEDO BIEN ESTO NO VA POR EL LADO DEL ELSE (REVISAR IF)
export const addToCart = (req,res) =>{
    // const itemToAdd = req.body;

    // if (cartContent.findIndex(movie => id === itemToAdd.id) < 0){
    //     cartContent.push({itemToAdd});   //agrego body
    //     res.send({
    //         status: "OK",
    //         cartContent
    // });
    // }else{
    //     res.send({
    //         status: "NOT OK - NO SE PUEDO INGRESAR",
    //         cartContent        
    //     });  // paso carrito como respuesta
    // }
}

export const removeFromCart = (req,res) =>{
    const urlId = Number(req.query.id);
    const indextoRemove = cartContent.findIndex(id => movie.id === urlId);
     
        // if (indextoRemove >=0){
        //     cartContent.splice(indextoRemove,1);
        //     res.send({
        //         status: "OK",
        //         cartContent
        //     });
        // }else{
        //     res.send({
        //         status: "NOT OK - NO SE ENCUENTRA",
        //         cartContent        
        //     });  // paso carrito como respuesta
        // }

}