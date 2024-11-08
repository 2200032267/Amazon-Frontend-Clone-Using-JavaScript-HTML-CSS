const cart=[];

const addToCart = (productId, quantity) => {
    const product = product.find(p => p.id === productId);
    if (product) {
        const item = cart.find(i => i.productId === productId);
        if (item) {
            item.quantity += quantity;
        } else {
            cart.push({ productId, quantity });
        }
    }
};
