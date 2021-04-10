//   The features are the following:
      // - The user should be able to add a list of names, find a way to get the user input and fill a list with the new name.
      const addToMainListF = () => {
        name = document.getElementById("name").value;
        mainList = document.getElementById("mainList");
        li = document.createElement("li");
        li.innerHTML = `${name}`;
        mainList.appendChild(li);
      };

      // - The user should be able to set the number of teams he wants, so that they will be generated. A team is just another list to be displayed.
      // - Each team should be inside a "column" to be responsive.
      PreviousTeamsNumber = document.getElementById("TeamsNumber").value;
      const TeamsNumberF = () => {
        CurrentTeamsNumber = document.getElementById("TeamsNumber").value;
        teamsList = document.getElementById("teamsList");
        if (
          CurrentTeamsNumber > PreviousTeamsNumber &&
          CurrentTeamsNumber != 0
        ) {
          teamsList.innerHTML += `
            <div class="col mb-3 mb-lg-0 px-1" id="team${CurrentTeamsNumber}">
              <h2>Team ${CurrentTeamsNumber}</h2>
              <ul>
              </ul>
            </div>`;
          PreviousTeamsNumber = CurrentTeamsNumber;
        } else if (CurrentTeamsNumber < PreviousTeamsNumber) {
          teamsList.lastChild.remove();
          PreviousTeamsNumber = CurrentTeamsNumber;
        }
      };
      // - [EXTRA] Create a button to remove a user from a team, and putting him back in the main list, waiting to be reassigned.
      const DeleteF = () => {};
      // li.innerHTML+=` <input type="button" value="Delete" onclick="DeleteF()" />`
      // create a unique ID for each name

      // - An "Assign" button will be required in order to launch the team generation functionality.
      // - Every time the user clicks on the "Assign" button, a random name is placed in a team and removed from the initial list.
      function randomTeam() {
        TeamsNumber = document.getElementById("TeamsNumber").value;
        return Math.floor(Math.random() * TeamsNumber + 1);
      }
      const assignF = () => {
        ListItem = document.querySelectorAll("#mainList li");
        teamNumber = document.querySelectorAll(`#team${randomTeam()} ul`);
        li = document.createElement("li");
        if (ListItem[0]) {
          li.innerHTML = `${ListItem[0].innerText}`;
          teamNumber[0].appendChild(li);
          ListItem[0].remove();
        }
      };

      // - [EXTRA] Create a button to reset the state of the app.
      const resetF = () => {
        mainList = document.getElementById("mainList");
        mainList.innerHTML = "";
        teamsList = document.querySelectorAll("#teamsList div");
        for (let i = 1; i <= teamsList.length; i++) {
          teamNumber = document.querySelectorAll(`#team${i} ul`);
          console.log("teamNumber:", teamNumber);
          for (let j = 0; j < teamNumber.length; j++) {
            teamNumber[j].innerHTML = "";
          }
        }
      };