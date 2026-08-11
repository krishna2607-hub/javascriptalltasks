fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    let container = document.querySelector(".api");

    products.forEach(c => {

        let product = document.createElement("div");

        product.innerHTML = `
            <h3>Title: ${c.title}</h3>

            <p>Description: ${c.description.slice(0, 50)}</p>

            <p>Price: $${c.price}</p>

            <hr>
        `;

        container.append(product);
    });
});