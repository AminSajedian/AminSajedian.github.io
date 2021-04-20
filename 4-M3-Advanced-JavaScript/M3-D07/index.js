// PAIR PROGRAMMING EXERCISE.
//       1 DRIVER, 1 NAVIGATOR.
//       1 Exercise each. Use GitHub to share the code.
//       Less exercise, more complicated. 
//       Ex1) Get and present, using async / await pattern the users from: https://jsonplaceholder.typicode.com/users 

let MainUsersArray = []
window.onload = () => {
    async function fetchUsersJSON() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const jsonedData = await response.json();
            [...MainUsersArray] = [...jsonedData]
            return jsonedData;
        }
        catch (error) {
            console.log(error);
        }
    }

    fetchUsersJSON().then((usersArray) => {
        const resultsDiv = document.querySelector("#results-div > table > tbody")
        MainUsersArray.forEach((usersData) => {
            resultsDiv.innerHTML += `
            <tr>
                <th scope="row">${usersData.id}</th>
                <td><a href="details.html?id=10">${usersData.name}</a></td>
               <td>${usersData.username}</td>
               <td>${usersData.email}</td>
               <td>${usersData.phone}</td>
             </tr>
            `;
        })
    });
}

//       Ex2) Create a dropdown (<select>) that allows the user to select between name, username and email. 
//            Create then a filter. When the user types in something, you should filter the user based on the input and on the value of the select.
//            Es.: select on NAME. Filter input = Glenna, only user id number 9 should remain

const searchInputFun = () => {
    const searchInput = document.getElementById("searchInput").value;
    const resultsDiv = document.querySelector("#results-div > table > tbody")
    const searchBy = document.getElementById("searchBy").value;
    console.log('searchBy:', searchBy)
    resultsDiv.innerHTML = ""
    let searchedUsersArray = ""
    if (searchBy == "name") {
        searchedUsersArray = MainUsersArray.filter(Users => Users.name.toLowerCase().indexOf(searchInput) !== -1);
    } else if (searchBy == "username") {
        searchedUsersArray = MainUsersArray.filter(Users => Users.username.toLowerCase().indexOf(searchInput) !== -1);
    } else if (searchBy == "email") {
        searchedUsersArray = MainUsersArray.filter(Users => Users.email.toLowerCase().indexOf(searchInput) !== -1);
    }

    searchedUsersArray.forEach((usersData) => {
        resultsDiv.innerHTML += `
            <tr>
                <th scope="row">${usersData.id}</th>
                <td><a href="details.html?id=10">${usersData.name}</a></td>
               <td>${usersData.username}</td>
               <td>${usersData.email}</td>
               <td>${usersData.phone}</td>
             </tr>
            `;
    })
}




//       Ex3) Create a function that, from the list of users, extracts only the name


//       Ex4) Create a function that, from the list of users, creates an array of addresses as string and not as an object. Like:
//               {
//               "street": "Victor Plains",
//               "suite": "Suite 879",
//               "city": "Wisokyburgh",
//               "zipcode": "90566-7771",
//               "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//               }
//           Should become Victor Plains, Suite 879, Wisokyburgh (90566-7771)

//       Ex5) Add a button that sorts the list by name ascending / descending (ONE button)
//       Ex6) Add a link on each user, when clicked it must go to a detail page, where to user information are presented (from the API)
//       EXTRA)
//       Visualize on a Google Map plugin all the users (using lat & lng)