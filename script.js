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


let cart = [];

//Função de adicionar ao carrinho 


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
    addToCart(name, price)
}})

//Adicionar no carrinho 

function addToCart(name, price){
    const existingItem = cart.find(item => item.name ===name)

    if(existingItem) {
        existingItem.quantity += 1;
    } else {

    cart.push({
        name,
        price, 
        quantity: 1,
    })} 

   updateCartModal();

    // atualiza carrinho 

    function updateCartModal(){
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const cartITemsElement = document.createElement("div");

            cartITemsElement.innerHTML =`
                <div>
                 <div>
                    <p>${item.name}</p>
                    <p>${item.quantity}</p>
                    <p>R$${item.price}</p>
                 </div>
                
                    <div>
                     <buttom>
                         Remover
                     </buttom>
                    </div>
                </div>      
            `
            cartItemsContainer.appendChild(cartITemsElement);
        })
    
    }
}
