fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    let container = document.querySelector(".api");

    products.forEach(c => {

        let product = document.createElement("div");

        product.innerHTML = `
            <p>Title: ${c.title}</p>

            <p>Description: ${c.description.slice(0, 20)}</p>

            <hr>
        `;

        container.append(product);
    });
});