fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    let container = document.querySelector(".api");

    products.forEach(c => {

        let product = document.createElement("div");

        product.innerHTML = `
            <p>Product: ${c.title}</p>

            <p>Price: $${c.price}</p>

            <p>Category: ${c.category}</p>

            <img src="${c.image}" width="150">

            <hr>
        `;

        container.append(product);
    });
});