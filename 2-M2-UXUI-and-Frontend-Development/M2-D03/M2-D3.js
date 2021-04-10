// Ex 12) Create a method that counts the number of "travels" on the page
const numberOfTravels = () => {
    const travels = document.getElementsByClassName("card");
    console.log("number of Travels is", travels.length);
  };

  // Ex 15) Create a function that adds a "HOT" badge to all the "Welcome Summer" offers
  const addHotBadge = () => {
    const WelcomeSummertitles = document.querySelectorAll(".card-title");
    WelcomeSummertitles.forEach((element) => {
      element.innerHTML = "<span class='badge badge-warning'>HOT</span>";
    });
  };

  // Ex 16) Create a function to delete all "cards" from the page
  const deleteAllCards = () => {
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].remove();
    }
  };