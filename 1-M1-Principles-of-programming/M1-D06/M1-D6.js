// EXTRA (use JavaScript code here)
      // EX7.: Write a function to change the h1 text
      document.getElementById("shopName").innerText =
        "Shop name changed by JS codes";
      // EX8.: Write a function to change the page background color
      document.getElementsByTagName("body")[0].style.backgroundImage =
        "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
      // EX9.: Write a function to change the footer address with a fake one
      document
        .getElementsByClassName("footer")[0]
        .getElementsByTagName("a")[0].innerText =
        "Fake address (changed by JS codes)";
      // EX10.: Write a function to add a CSS class to every Amazon link
      const addCssClassToLinks = () => {
        let tr = document
          .getElementById("productsTable")
          .getElementsByTagName("tbody")[0]
          .getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          tr[i]
            .getElementsByTagName("td")[4]
            .classList.add("ProductsAmazonLink");
        }
      };
      // EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image
      const ImgaesVisibility = () => {
        let tr = document
          .getElementById("productsTable")
          .getElementsByTagName("tbody")[0]
          .getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          tr[i]
            .getElementsByTagName("td")[1]
            .classList.toggle("ImgaesVisibility");
        }
      };
      // EX12: Write a function to color the price of each product in a differentone every time it's invoked
      const chagePriceColor = () => {
        let tr = document
          .getElementById("productsTable")
          .getElementsByTagName("tbody")[0]
          .getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          tr[i].getElementsByTagName("td")[3].style.color =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
      };