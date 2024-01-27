let cart = document.getElementById("cart");
let shopCards = document.querySelectorAll(".shopCard");

cart.addEventListener("click", function () {
    let container = document.querySelector(".container");
    if (container) {
        container.innerHTML = "";
    }

    document.body.innerHTML = '<a class="empty" href="">Cart is empty</a>';
});

shopCards.forEach(function (card) {
    card.addEventListener("click", function () {
        let div = document.createElement("div");
        div.classList.add("detailCard");

        let imgSrc = card.querySelector('img').getAttribute("src");

        div.innerHTML = `
            <img src="${imgSrc}" alt="">
           <div>
           <h1>Trends at NZ'S</h1>
           <h1>Let your body to comfort with new fashion</h1>
           <p>Description</p>
           <p>Price</p>
           <p>Quantity</p>
           <p>Additional Info</p>
           <a href="#">Shop Now</a></div>
       `;


        document.body.appendChild(div);
    });
});

