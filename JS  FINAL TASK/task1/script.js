fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    let container = document.querySelector(".api");

    products.forEach(c => {

        let card = document.createElement("div");

        card.innerHTML = `
            <h2>${c.title}</h2>

            <img src="${c.image}" width="150">

            <p>Price: $${c.price}</p>

            <p>Category: ${c.category}</p>

            <p>Rating: ${c.rating.rate}</p>

            <hr>
        `;

        container.append(card);
    });
});