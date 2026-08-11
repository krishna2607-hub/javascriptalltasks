fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    let container = document.querySelector(".api");

    products.forEach(c => {

        let product = document.createElement("div");

        product.innerHTML = `
            <p>Product: ${c.title}</p>

            <p>Rating: ${c.rating.rate}</p>

            <p>Reviews: ${c.rating.count}</p>

            <hr>
        `;

        container.append(product);
    });
});