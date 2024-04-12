const menu = document.getElementById('menu');
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById('checkout-btn');  
const closeModalBtn = document.getElementById('close-modal-btn');
const cartCounter = document.getElementById('cart-count');
const addressInput = document.getElementById('addresss');
const addressWarning = document.getElementById('address-warning');

//Função de adicionar ao carrinho 

function addToCart(name, price){
    alert("O item é:" + name, price)
}
//Abrir o carrinho 
cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex"
})
//botão fechar carrinho 
closeModalBtn.addEventListener("click", function() {
    cartModal.style.display = "none"
})
//Fechar carrinho com clique fora 
cartModal.addEventListener("click", function(event) {
    if (event.target === cartModal){
        cartModal.style.display = "none"
}})
menu.addEventListener("click", function(event) {
    
    let parentButton = event.target.closest(".add-to-cart-btn")

    if(parentButton){
    const name = parentButton.getAttribute("data-name")
    const price = parseFloat(parentButton.getAttribute("data-price"))
}})

//Adicionar no carrinho 



