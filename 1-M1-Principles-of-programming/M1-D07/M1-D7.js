/* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

const changeTitle = function (newTitle) {
  let title = document.querySelector("header h1");
  title.innerHTML = "title changed by JS codes";
};

/* EXERCISE 2
Write a function for changing the class of the title of the page in "myHeading".
*/

const addClassToTitle = function () {
  let title = document.querySelector("header h1");
  title.classList.add("myHeading");
};



/* EXERCISE 3
Write a function for changing the text of only the p which are children of a div.
*/

const changePcontent = function () {
  let pChildrenOfDiv = document.querySelectorAll("div p");
  for (i = 0; i < pChildrenOfDiv.length; i++) {
    pChildrenOfDiv[i].innerHTML = "new text";
  }
};

/* EXERCISE 4
Write a function for changing the destination of every link to https://www.google.com
*/

const changeUrls = function () {
  let links = document.querySelectorAll("a");
  for (i = 0; i < links.length; i++) {
    links[i].setAttribute("href", "https://www.google.com");
  }
};

/* EXERCISE 5
 Write a function for adding a new item in the second list.
 */

const addToTheSecondList = function (content) {
  let secondList = document.querySelector("ul#secondList");
  let newListItem = document.createElement("li");
  newListItem.innerText = "4th";
  newListItem.style.color = "red";
  secondList.appendChild(newListItem);
};

/* EXERCISE 6
Write a function for adding a second paragraph to the div.
*/

const addParagraph = function (content) {
  let firstDivTag = document.querySelector("div");
  let newParagraph = document.createElement("p");
  newParagraph.innerText = "This is a new Paragraph";
  newParagraph.style.color = "red";
  firstDivTag.appendChild(newParagraph);
};

/* EXERCISE 7
Write a function for making the first UL disappear.
*/

const firstUlDisappear = function () {
  let FirstUL = document.querySelectorAll("ul")[0];
  console.log(FirstUL);
  FirstUL.style.display = "none";
};

/* EXERCISE 8
Write a function for making the background of every UL green.
*/

const paintItGreen = function () {
  let everyUL = document.querySelectorAll("ul");
  for (i = 0; i < everyUL.length; i++) {
    everyUL[i].style.background = "green";
  }
};

/* EXERCISE 9
Make the heading of the page change color every time the user clicks on it.
*/

const makeItClickable = function () {
  let headingOfThePage = document.querySelector("h1");
  headingOfThePage.onclick = changeColor;
};

const changeColor = function (e) {
  console.log(e.target);
  e.target.style.color = "red";
};

/* EXERCISE 10
Change the footer text with something else when the user clicks on it.
*/

const changeFooterText = function () {
  let footer = document.querySelector("footer");
  footer.onclick = changeText;
};

const changeText = function (e) {
  console.log(e.target);
  e.target.innerText = "new text";
};
/* EXERCISE 11
Attach an event listener to the input field in the page for console logging its value just after any keystroke.
*/

const inputField = document.getElementById("input-field");
inputField.addEventListener("keydown", (e) => {
  console.log(e.target.value);
});

/* EXERCISE 12
Create a new welcome alert message when the page successfully loads.
*/

window.onload = function () {
  alert("Welcome to this page");
  let styleElement = document.createElement("style");
  styleElement.innerText = ".myHeading {color: red;}"
  let headElement = document.querySelector("head");
  headElement.appendChild(styleElement)
};

/* EXERCISE 13
Use HTML5 tags to divide the content of the page in a more semantic way.
*/

      // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines
