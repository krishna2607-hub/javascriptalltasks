fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {

    let container = document.querySelector(".api");

    products.forEach(c => {

        let card = document.createElement("div");

        card.className = "card";

        let title = document.createElement("h2");
        title.innerHTML = c.title;

        let image = document.createElement("img");
        image.src = c.image;
        image.alt = c.title;

        let details = document.createElement("div");

        details.innerHTML = `
            <p>Category: ${c.category}</p>

            <p>Price: $${c.price}</p>

            <p>Rating: ${c.rating.rate}</p>

            <p>Reviews: ${c.rating.count}</p>
        `;

        card.append(title);
        card.append(image);
        card.append(details);

        container.append(card);
    });
});