const getitem = localStorage.getItem('cart')
let id = JSON.parse(getitem)
fetch(`http://localhost:3000/api/products/${id._id}`)
.then(res=>res.json())
.then(data=>{
    set_item(data)
    
})
const cart_i = document.querySelector('#cart__items')

function set_item(data){
    cart_i.innerHTML = [data].map(item=>{
        return `
        <article class="cart__item" data-id="${item._id}" data-color="${id.color}">
        <div class="cart__item__img">
          <img src="${item.imageUrl}" alt="Photographie d'un canapé">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>${item.name}</h2>
            <p>${id.color}</p>
            <p>${item.price}€</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté :${id.quantity} </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article>
        `
    }).join(' ')
    
    
    
    
    
    
}