// QUIZ GAME!

      // RULES:
      // / The player must guess correctly a certain amount of questions
      // / Each correct answer gives him one point
      // / Answers could be multiple or true/false
      // / At the end of the game, the user must know his total score

      // QUESTIONS:
      // / You can get them from this URL ( http://bit.ly/strive_QUIZZ ) or you can write your own
      // / Could be multiple of boolean (true / false)
      // / [EXTRA] Show if the answer was wrong or correct after clicking
      // / [EXTRA] Present them one a time

      // HINTS:
      // / Keep a global variable score for the score
      // / Keep a variable questionNumber for the question the user is answering
      // / When questionNumber is bigger then the available questions, present the score
      // / Start working with the question saved in a variable, and then include AJAX etc
      // / Start with the easier version and THEN implement the EXTRAs
      // / Please debug everything / try it on the console to be sure of what to expect from your code

      // EXTRA:
      // / Show if the answer was wrong or correct after clicking
      // / Present questions one a time
      // / Let the user select difficulty and number of questions (you can get q/a from https://opentdb.com/api.php?amount=10&category=18&difficulty=easy modifying amount and difficulty)

      var questions = [
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "What does CPU stand for?",
          correct_answer: "Central Processing Unit",
          incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
          correct_answer: "Final",
          incorrect_answers: ["Static", "Private", "Public"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question: "The logo for Snapchat is a Bell.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
          correct_answer: ".svg",
          incorrect_answers: [".png", ".jpeg", ".gif"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "In web design, what does CSS stand for?",
          correct_answer: "Cascading Style Sheet",
          incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "What is the code name for the mobile operating system Android 7.0?",
          correct_answer: "Nougat",
          incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
          ],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question: "On Twitter, what is the character limit for a Tweet?",
          correct_answer: "140",
          incorrect_answers: ["120", "160", "100"],
        },
        {
          category: "Science: Computers",
          type: "boolean",
          difficulty: "easy",
          question: "Linux was first created as an alternative to Windows XP.",
          correct_answer: "False",
          incorrect_answers: ["True"],
        },
        {
          category: "Science: Computers",
          type: "multiple",
          difficulty: "easy",
          question:
            "Which programming language shares its name with an island in Indonesia?",
          correct_answer: "Java",
          incorrect_answers: ["Python", "C", "Jakarta"],
        },
      ];
      window.onload = function () {};
      // MainPart
      MainPart = document.getElementById("MainPart");
      for (i = 0; i < questions.length; i++) {
        // questionPart
        let questionPart = document.createElement("div");
        questionPart.setAttribute("id", `questionPart${i}`);

        let form = document.createElement("form");
        form.setAttribute("id", `form${i}`);

        // question
        let question = document.createElement("p");
        question.innerHTML = questions[i].question;
        question.setAttribute("id", `question${i}`);
        form.appendChild(question);

        // Choices
        let Choices = [];
        let labels = [];
        randomNumber = Math.floor(
          Math.random() * (questions[i].incorrect_answers.length + 1)
        );
        for (x = 0; x < questions[i].incorrect_answers.length; x++) {
          if (x == randomNumber) {
            Choices[x] = document.createElement("input");
            Choices[x].setAttribute("type", "radio");
            Choices[x].setAttribute("id", `question${i}Choice${i}`);
            Choices[x].setAttribute("name", `question${i}`);
            Choices[x].setAttribute("value", `${questions[i].correct_answer}`);

            // labels
            labels[x] = document.createElement("label");
            labels[x].setAttribute("for", "radio");
            labels[x].setAttribute("id", `question${i}Choice${i}`);
            labels[x].innerHTML += `${questions[i].correct_answer}<br>`;
            form.appendChild(Choices[x]);
            form.appendChild(labels[x]);
            questionPart.appendChild(form);
          }
          Choices[x] = document.createElement("input");
          Choices[x].setAttribute("type", "radio");
          Choices[x].setAttribute("id", `question${i}Choice${i}`);
          Choices[x].setAttribute("name", `question${i}`);
          Choices[x].setAttribute(
            "value",
            `${questions[i].incorrect_answers[x]}`
          );

          // labels
          labels[x] = document.createElement("label");
          labels[x].setAttribute("for", "radio");
          labels[x].setAttribute("id", `question${i}Choice${i}`);
          labels[x].innerHTML += `${questions[i].incorrect_answers[x]}<br>`;
          form.appendChild(Choices[x]);
          form.appendChild(labels[x]);
          questionPart.appendChild(form);
        }
        button = document.createElement("button");
        button.setAttribute("id", `button${i}`);
        button.setAttribute("type", "submit");
        // button.setAttribute("onclick", `submitFunction${i}()`);
        button.innerText = "Submit";
        form.appendChild(button);

        // separator
        separator = document.createElement("hr");
        questionPart.appendChild(separator);

        // log
        pre = document.createElement("pre");
        pre.setAttribute("id", `log${i}`);
        questionPart.appendChild(pre);

        // separator
        separator = document.createElement("hr");
        questionPart.appendChild(separator);

        // Append all to the MainPart
        MainPart.appendChild(questionPart);
      }

      // *************************************
      // form0 = document.getElementById("form0");
      // log0 = document.getElementById("log0");
      // console.log("log0", log0);
      // form0.addEventListener(
      //   "submit",
      //   function (event) {
      //     let data = new FormData(form0);
      //     let output = "";
      //     for (const entry of data) {
      //       console.log("entry:", entry);
      //       output +=
      //         "Your Answer is: " +
      //         entry[1] +
      //         "\r" +
      //         "The correct answer is: " +
      //         questions[0].correct_answer;
      //     }
      //     log0.innerText = output;
      //     event.preventDefault();
      //   },
      //   false
      // );
      // *************************************
      // *************************************
      let log = [];
      // for (i = 0; i < questions.length; i++) {
      //   log[i] = document.getElementById(`log${i}`);
      // }
      
      let form = [];
      for (i = 0; i < questions.length; i++) {
        form[i] = document.getElementById(`form${i}`);
        // log[i] = document.getElementById(`log${i}`);
          // console.log("log",i,log[i]);


        form[i].addEventListener(
          "submit",
          function (event) {
            data = new FormData(form[i]);
            output = [];
            let z=0
            for (entry of data) {
              console.log("entry:", entry);
              output[z] +=
                "Your Answer is: " +
                entry[1] +
                "\r" +
                "The correct answer is: " +
                questions[i].correct_answer;
                z++
              }
              for (z of output){
              document.getElementById(`log${i}`).innerText = output[z];}
            event.preventDefault();
          },
          false
        );
      }

      //IF YOU ARE DISPLAYING ALL THE QUESTIONS TOGETHER:
      //HINT: for each question, create a container with the "question"
      //create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
      //when EVERY question has an answer (google for how to get a value from a radio button with JS)
      //IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
      //Display first question with a title + radio button
      //when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.

      //HOW TO calculate the result
      //You can do it in 2 ways:
      //If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
      //If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
    