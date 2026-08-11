fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    let container = document.querySelector(".api");

    products.forEach(c => {

        let image = document.createElement("img");

        image.src = c.image;

        image.alt = c.title;

        image.width = 180;

        container.append(image);
    });
});