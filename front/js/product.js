const geti = JSON.parse(localStorage.getItem('cart'))||[]

const alli = [geti]








const url = new URL(window.location.href) 
const params = new URLSearchParams(url.search);
const id = params.get('id');

fetch(`http://localhost:3000/api/products/${id}`)
.then(res=>res.json())
.then(data=>{
    set_item(data)
    
})

const option = document.querySelector('#colors')
function set_item(data){
    const img = document.querySelector('.item__img')
    const title = document.getElementById('title')
    const price = document.getElementById('price')
    const desc = document.getElementById('description')

    const image = document.createElement('img')
    image.src = data.imageUrl
    image.alt = data.altTxt
    img.appendChild(image)

    title.textContent = data.name
    price.textContent = data.price
    desc.textContent = data.description
    for(let i = 0; i < data.colors.length;){
        const value = document.createElement('option')
        value.textContent = data.colors[i]
        option.appendChild(value)
        i++
    }
}

const btn = document.getElementById('addToCart')
const quantity = document.getElementById('quantity')


function sendto(data){
    localStorage.setItem('cart', data)
    alli.push(data)
    const test = localStorage.setItem('test', JSON.stringify(alli))|| []

}

btn.addEventListener('click', (e)=>{
    if(!option.value || quantity.value == 0){
        return alert('please fill quantity and color option fields')
    }

  
  
     let updatedata = {
        _id:id,
        quantity:quantity.value,
        color:option.value
     }
     sendto(JSON.stringify(updatedata))
    
    
})