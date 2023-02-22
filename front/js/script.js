
 fetch("http://localhost:3000/api/products")
.then(res=>res.json())
.then(data=>{
    list_item(data)
})

//list item in index page
function list_item(data){
    const item = document.querySelector('.items')
    const list = data.map(items=>{
        return `
        <a href="./product.html?id=${items._id}">
            <article>
            <img src="${items.imageUrl}" alt="${items.altTxt}">
            <h3 class="productName">${items.name}</h3>
            <p class="productDescription">${items.description}</p>
            </article>
        </a>
        `
    }).join(' ')
    item.innerHTML = list
}

