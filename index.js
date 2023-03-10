const getItemDetails = () => {
    const product = document.getElementById('item-name').value;
    const quantity = document.getElementById('item-quantity').value;
    displayItems(product, quantity);
    addToStorage(product, quantity);
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';

}
const displayItems = (product, quantity) => {
    const productsContainer = document.getElementById('items-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    productsContainer.appendChild(li);
}
const getCart = () => {
    const storedCart = localStorage.getItem('cart');
    let saveCart = {};
    if (storedCart) {
        saveCart = JSON.parse(storedCart);
    }
    return saveCart;
}
const addToStorage = (product, quantity) => {
    const saveCart = getCart();
    saveCart[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(saveCart));
}
const displayFromCart = () => {
    const savedCart = getCart();
    // console.log(storedCart);
    for (const product in savedCart) {
        const quantity = savedCart[product];
        displayItems(product, quantity);
        console.log(product, quantity);
    }
}
displayFromCart();