let cartContent = [];

export const getCart = (req, res) => {
    res.send(cartContent);
}


export const addToCart = (req, res) => {
    const itemToAdd = req.body;

    if (cartContent.findIndex(movie => movie.id === itemToAdd.id) < 0) {
        cartContent.push(itemToAdd);   //agrego body
        res.send({
            status: "OK",
            description: "ADD MOVIE",
            cartContent
        });
    } else {
        res.send({
            status: "NOT OK",
            description: "NOT ADDING - MOVIE ALLREADY EXIST",
            cartContent
        });
    }
}

export const removeFromCart = (req, res) => {
    const urlId = req.query.id;
    const indextoRemove = cartContent.findIndex(movie => movie.id === urlId);

    if (indextoRemove >= 0) {
        cartContent.splice(indextoRemove, 1);
        res.send({
            status: "OK",
            description: "DELETED MOVIE",
            cartContent
        });
    } else {
        res.send({
            status: "NOT OK",
            description: "MOVIE NOT FOUND TO ERASE",
            cartContent
        });
    }

}

export const clearCart = (req, res) => {
    cartContent = [];
    res.send({
        status: "OK",
        description: "CART WAS EMPTY",
        cartContent
    });
}