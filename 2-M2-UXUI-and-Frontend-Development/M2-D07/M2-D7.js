// JS Exercises
      // EX11) Write a function to add a new link into the navbar
      const addNewLinkFunction = (newText) => {
        nav = document.querySelector("div.nav-scroller nav");
        newLink = document.createElement("a");
        newLink.innerText = newText;
        nav.appendChild(newLink);
      };
      // addNewLinkFunction("New Link added")

      // EX12) Write a function to change the color of the main title
      const changeColorMainTitleFunction = (newColor) => {
        title = document.querySelector("div.jumbotron div h1");
        title.style.color = newColor;
      };
      // changeColorMainTitleFunction("red")

      // EX13) Write a function to change the background of the jumbotron
      const changeBackgroundColorJumbotronFunction = (newColor) => {
        jumbotron = document.querySelector("div.jumbotron");
        jumbotron.classList.remove("bg-dark");
        // remove class with !important property
        jumbotron.style.backgroundColor = newColor;
      };
      // changeBackgroundColorJumbotronFunction("purple")

      // EX14) Write a function to remove all the links under "Elsewhere"
      const removeAllTheLinksUnderElsewhereFunction = () => {
        SecondListUnstyled = document.querySelector(
          "main div.row aside.blog-sidebar div:nth-child(3) ol.list-unstyled"
        );
        SecondListUnstyled.innerHTML = "";
      };
      // removeAllTheLinksUnderElsewhereFunction()

      // EX15) Write a function to change the column size for post headings
      const changeTheColumnSizeForPostHeadingsFunction = () => {
        // Headings h2
        Headingsh2 = document.querySelectorAll(
          "main div.row div.blog-main div.blog-post h2"
        );
        for (let i = 0; i < Headingsh2.length; i++) {
          Headingsh2[i].style.columnWidth = "100px";
        }
        // Headings h3
        Headingsh3 = document.querySelectorAll(
          "main div.row div.blog-main div.blog-post h3"
        );
        for (let i = 0; i < Headingsh3.length; i++) {
          Headingsh3[i].style.columnWidth = "100px";
        }
      };

      // EX16) Write a function to remove the "Search" magnifying glass icon

      const removeTheSearchMagnifyingGlassIconFunction = () => {
        MagnifyingGlassIcon = document.querySelector(
          "div.container header div div.col-4.d-flex.justify-content-end.align-items-center a.text-muted"
        );
        MagnifyingGlassIcon.innerHTML = "";
      };
      // EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
      const trim50CharactersFirstParagraphBlogPostFunction = () => {
        firstParagraph = document.querySelectorAll(
          "main div.row div.blog-main div.blog-post p"
        );
        for (let i = 0; i < firstParagraph.length; i++) {
          firstParagraph[i].innerText = firstParagraph[i].innerText.slice(
            50,
            firstParagraph[i].innerText.length
          );
        }
      };
      // EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
      const NewerButtonFunction = () => {
        blogMain = document.querySelector("main div.row div.blog-main");
        newBlogPost = document.createElement("div");
        newBlogPostTitle = document.createElement("h2");
        newBlogPostTitle.innerText = "New Blog Post";
        newBlogPost.appendChild(newBlogPostTitle);
        blogMain.appendChild(newBlogPost);
      };
      // EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
      const OlderButtonFunction = () => {
        blogMainLastblogPost = document.querySelector(
          "main div.row div.blog-main div.blog-post:last-of-type"
        );
        blogMainLastblogPost.remove();
      };
      // EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name

      let authorName = document.querySelectorAll(
        "main div.row div.blog-main div.blog-post p.blog-post-meta a"
      );

      for (let i = 0; i < authorName.length; i++) {
        authorName[i].addEventListener("mouseenter", function (event) {
          alert(`Hello ${event.target.innerText}`);
        });
      }