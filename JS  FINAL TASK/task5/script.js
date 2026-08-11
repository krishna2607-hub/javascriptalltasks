fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    let container = document.querySelector(".api");

    products.forEach(c => {

        let product = document.createElement("div");

        product.innerHTML = `
            <p>Title: ${c.title}</p>

            <p>Category: ${c.category}</p>

            <p>Price: $${c.price}</p>

            <hr>
        `;

        container.append(product);
    });
});