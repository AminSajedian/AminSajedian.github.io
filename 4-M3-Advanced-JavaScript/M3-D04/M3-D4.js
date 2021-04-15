//     You are creating the "shopping cart experience" for a Online Marketplace.
// You have the list of the available books from the current API:
// https://striveschool-api.herokuapp.com/books
// What you have to do is:

// 0) Get all the products from the API using a fetch
window.onload = () => {
    const myfetch = fetch("https://striveschool-api.herokuapp.com/books")
        .then((res) => res.json())
        .then((books) => loadBooks(books))
        .catch((error) => alert(error));
};
let bookCatalogue = []
// 1) Display the list of items available on the page using template literals `` and .forEach
const loadBooks = (books) => {
    bookCatalogue = books
    const divRow = document.querySelector("div.container div.row.row-cols-1.row-cols-md-3");
    books.forEach((element) => {
        divRow.innerHTML += `
        <div class="col mb-4">
            <div class="card h-100">
                <img src="${element.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${element.title}</h5>
                    <p class="card-text text-center text-danger"><strong>$${element.price}</strong></p>
                    <button class="addToCartButton btn btn-primary">Add to Cart</button>
                    <button class="skipButton btn btn-primary">Skip</button>
                </div>
            </div>
        </div>
        `;
    });


    // 2) Add a "add to cart button"
    let addToCartButton = document.querySelectorAll(".addToCartButton");
    for (const b of addToCartButton) {
        b.onclick = addToCartFun;
    }

    // 4) Add "skip" button next to each item
    let skipButton = document.querySelectorAll(".skipButton");
    for (const b of skipButton) {
        b.onclick = skipFun;
    }


    // 6-1)"search bar", When the user types more than 3 chars, you should filter the content of the page to show only the items with a matching name (hint: use .filter method)
    const searchFun = (event) => {
        searchQuery = event.currentTarget.value.toLowerCase()
        if (searchQuery.length >= 3) {
            const filteredBooks = bookCatalogue.filter(book => book.title.toLowerCase().indexOf(searchQuery) !== -1)

            const divRow = document.querySelector("div.container div.row.row-cols-1.row-cols-md-3");
            divRow.innerHTML = ""
            filteredBooks.forEach((element) => {
                divRow.innerHTML += `
        <div class="col mb-4">
            <div class="card h-100">
                <img src="${element.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${element.title}</h5>
                    <p class="card-text text-center text-danger"><strong>$${element.price}</strong></p>
                    <button class="addToCartButton btn btn-primary">Add to Cart</button>
                    <button class="skipButton btn btn-primary">Skip</button>
                </div>
            </div>
        </div>
        `;
            });
        } else {
            divRow.innerHTML = ""
            books.forEach((element) => {
                divRow.innerHTML += `
        <div class="col mb-4">
            <div class="card h-100">
                <img src="${element.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${element.title}</h5>
                    <p class="card-text text-center text-danger"><strong>$${element.price}</strong></p>
                    <button class="addToCartButton btn btn-primary">Add to Cart</button>
                    <button class="skipButton btn btn-primary">Skip</button>
                </div>
            </div>
        </div>
        `;
            });
        }
    }
    // 6-2) Add a "search bar"
    let searchInput = document.querySelectorAll(".searchInput");
    for (const b of searchInput) {
        b.onkeyup = searchFun;
    }

}
// 3) When the button is pressed, change the style of the item and add it to another list
const addToCartFun = (event) => {
    const cartList = document.querySelector(".cartList");
    const card = event.currentTarget.closest(".card");
    const cardTitle = card.querySelector(".card-title").innerText;
    const cardText = card.querySelector(".card-text").innerText;
    card.style.border = "2px solid red"
    cartList.innerHTML += `<div class="dropdown-item d-flex align-items-center"><button class="delete-item btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>
    </button> <span>${cardText} -&nbsp;</span><span class="selected-item">${cardTitle}</span></div>`
    let deleteItem = document.querySelectorAll(".delete-item");
    for (const b of deleteItem) {
        b.onclick = deleteItemFun;
    }
};

// 5) When pressed, the button should remove from the page the item not interesting from the user
const skipFun = (event) => {
    const card = event.currentTarget.closest(".col.mb-4");
    card.remove()
};


// 7) Allow the user to delete items from the cart list


const deleteItemFun = (event) => {
    const Item = event.currentTarget.closest(".dropdown-item");
    Item.remove()
    const selectedItem = Item.querySelector(".selected-item").innerText;

    const cardTitle = document.querySelectorAll(".card-title");
    cardTitle.forEach(element => {
        if (element.innerText == selectedItem) {
            element.closest(".card").removeAttribute("style")
        }
    });
}

// [EXTRA]
// 8) Add a "clean cart" button, to clean the whole list.
const CleanCartFun = () => {
    const dropdownItem = document.querySelectorAll(".dropdown-item");
    for (const Item of dropdownItem) {
        Item.remove()
    }
}

// 9) Create a second "detail page" for the product. When the user clicks on a product name, the app should redirect him to the secondary page, passing the ASIN in query string
// 10) In page "detail" show some details of the selected product (https://striveschool-api.herokuapp.com/books/1940026091 to fetch the details of a specific book)
