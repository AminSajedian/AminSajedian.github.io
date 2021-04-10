/* EXERCISE 5:
                Add a new task to the list.
                Suggestion:
                - Use document.getElementById to get the UL item and the input text
                - Use the document.createElement to create the new List Item
                - Append the child to the UL
            */
                const addNewTask = () => {
                    if (document.getElementById("newTask").value == "") return;
                    newTask = document.getElementById("newTask");
                    myTaskList = document.getElementById("myTaskList");
                    newListItem = document.createElement("li");
                    newListItem.classList.add("ListItem");
                    newListItem.innerText = newTask.value;
                    myTaskList.appendChild(newListItem);
                  };
            
                  /* EXERCISE 6:
                            Create a method "removeLast" which removes the last item from the task list
                        */
                  const removeLast = () => {
                    ListItem = document.getElementsByClassName("ListItem");
                    ListItem[ListItem.length - 1].remove();
                  };
                  /* EXERCISE 7:
                            Create a method "removeFirst" which removes the first item from the task list
                        */
                  const removeFirst = () => {
                    ListItem = document.getElementsByClassName("ListItem");
                    ListItem[0].remove();
                  };
                  /* EXERCISE 8:
                           Create a method "getTasksAsArray" which returns, and prints to the console an array containing the tasks as string
                        */
                  const getTasksAsArray = () => {
                    ListItems = document.getElementsByClassName("ListItem");
                    let taskArray = [];
                    for (let i = 0; i < ListItems.length; i++) {
                      taskArray[i] = ListItems[i].innerText;
                    }
                    return taskArray;
                  };
                  /* EXERCISE 9:
                           Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an
                           onchange event listener ad applies it as background to every list item
                        */
            
                  /* EXTRA */
                  const changeTaskBackgroundColor = () => {
                    colorPicker = document.getElementById("colorPicker");
                    myTaskList = document.getElementById("myTaskList");
                    colorPicker.addEventListener("change", () => {
                      myTaskList.style.backgroundColor = colorPicker.value;
                    });
                  };
                  /* EXERCISE 10:
                           Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
            
                           Use your spare time to beautify your task list via CSS.
            
                           Suggestion:
                           - Break the code into many function for semplicity
                           - Reuse the functions previously created
                        */
                  const bubbleSort = () => {
                    ListItems = document.getElementsByClassName("ListItem");
                    let inputArr = [];
                    for (let i = 0; i < ListItems.length; i++) {
                      inputArr[i] = ListItems[i].innerText;
                    }
                    let len = inputArr.length;
                    for (let i = 0; i < len; i++) {
                      for (let j = 0; j < len; j++) {
                        if (inputArr[j] > inputArr[j + 1]) {
                          let tmp = inputArr[j];
                          inputArr[j] = inputArr[j + 1];
                          inputArr[j + 1] = tmp;
                        }
                      }
                    }
                    for (let i = 0; i < ListItems.length; i++) {
                      ListItems[i].innerText = "";
                    }
                    for (let i = 0; i < ListItems.length; i++) {
                      ListItems[i].innerText = inputArr[i];
                    }
                  };