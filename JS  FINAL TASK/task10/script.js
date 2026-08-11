fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    let container = document.querySelector(".api");

    products.forEach(c => {

        let card = document.createElement("div");

        card.innerHTML = `
            <img src="${c.image}" width="180">

            <h2>Title: ${c.title}</h2>

            <p>Category: ${c.category}</p>

            <p>
                Description:
                ${c.description}
            </p>

            <p>Price: $${c.price}</p>

            <p>Rating: ${c.rating.rate}</p>

            <p>Reviews: ${c.rating.count}</p>

            <button>BUY NOW</button>

            <hr>
        `;

        container.append(card);
    });
});