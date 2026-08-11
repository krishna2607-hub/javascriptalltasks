fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    let container = document.querySelector(".api");

    products.forEach(c => {

        let card = document.createElement("div");

        card.innerHTML = `
            <img src="${c.image}" width="150">

            <h3>${c.title}</h3>

            <p>Category: ${c.category}</p>

            <button>Buy for $${c.price}</button>

            <hr>
        `;

        container.append(card);
    });
});