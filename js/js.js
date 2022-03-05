  // grabbing elements into a variables
  let form = document.getElementById("addForm");
  let itemList = document.getElementById("items");
  let filter = document.getElementById("filter");

  // add event listener
  form.addEventListener("submit", addItem);

  // add event listener to the filter (search bar)
  filter.addEventListener("keyup", filterItems);

  // add event listener to the button element
  itemList.addEventListener("click", delItem);

  //
  //TODO: Try re-setting the string inside the textbox to empty after adding to list
  // TODO: add day/night mode to the page. It should be on the same row with the H2 (Add ToDo) element
  //


  // event handler | event function () | AddItems function
  function addItem(e) {
      //overide the default submit function
      e.preventDefault();

      // grab the value from the input box
      let item = document.getElementById("item").value;

      // check if textbox is not empty
      if (item != "") {




          // create html element
          let li = document.createElement("li");

          // assigning class to the li element
          li.className = "list-group-item";

          // adding value to the created li tag
          li.appendChild(document.createTextNode(item));

          //NOTE: THE DELETE BUTTON IS CREATED IN THE LOCALSTORAGE SECTION
          // creating the del button
          //let del = document.createElement("button");
          //del.appendChild(document.createTextNode("X"));

          // assigning a classname to the button
          //del.className = "btn btn-danger btn-sm float-right delete";


          // appending the button to the li item
          //li.appendChild(del)

          // debugging the li
          //console.log(li);

          // confirm the addition of item
          let confirmation = confirm("Add ToDo?");

          // adding local storage to mimic the presence of database
          //localStorage.setItem("todoList", li.textContent);

          if (confirmation) {
              // appending the newly created li to the list groups
              //itemList.appendChild(li);   //TODO UNCOMMENT THIS LATER IF THINGS DON'T WORKOUT

              //Append item to the UL
              //itemList.innerHTML = localStorage.getItem("todoList");

              // making keys from data values
              let date = Date.now();
              //TODO:localStorage.setItem(date, li.textContent);
              localStorage.setItem(date, li.textContent);
              location.reload();


          }
      }


  }

  //NOTE redering the todos onto the screen
  for (let i = 0; i < localStorage.length; i++) {
      // extracting the key, value values from the localStorage
      let iterKey = localStorage.key(i); // key
      let iterValue = localStorage.getItem(iterKey); // value

      // create the del button
      let delBtn = "<button class=\"btn btn-danger btn-small float-right delete\">X</button>";

      //insert the list item and the button into the UL tag 
      itemList.innerHTML += `<li class="list-group-item">${iterValue}${delBtn}</li>`;
  }


  // Item remover || Delete Item from list
  function delItem(e) {
      // check if the clicked item is the actual button
      if (e.target.classList.contains("delete")) {

          // grabbing unto the parent element of the button (i.e li)
          let li = e.target.parentElement;

          // grabbing the value of the li || To be used to find the index of the li
          let liValue = li.textContent + "X";

          //to store the index of the deleted element
          var index;

          //NOTE-TODO NOTE-TODO NOTE-TODO NOTE-TODO
          // getting the index of the li
          for (let i = 0; i < localStorage.length; i++) {
              // Because of some redundant 'X' which I am not yet ready to debug (:
              if (liValue.indexOf(localStorage.getItem(localStorage.key(i)))) {
                  index = localStorage.key(i);
              }
          }

        //   We can get all localstorage entries useing Object
        var todos = Object.entries(localStorage);
        // this will return a 2D array of all entries
        // let's loop through them
        for (i = 0; i < todos.length; i++)
        {
            // to grab a todos, we will use todos[i]
            let currentItem  = todos[i];
            // this will also return an array with position 0 being todo key and 1 being todo value
            // check if the values is same as item value
            if (currentItem[1] == liValue)
            {
                // let's astore the key of this todo item
                index = currentItem[0];
            }
            
        }

          // ask for confirmation before deleting item
          let confirmation = confirm("Delete ToDo?")

          // delete if yes
          if (confirmation) {
              // remove the li from the List Group (i.e li)
              itemList.removeChild(li);

              //console.log(index, liValue);
              // removing from the localStorage || Removing completely
              //TODO: localStorage.rem
              localStorage.removeItem(index);
              location.reload();

          }
      };
  }


  // Filter items in the list || search items
  function filterItems(e) {
      // grab text to filter/search
      let filterText = e.target.value.toLowerCase();

      // grab all the list items available
      let liAvailable = itemList.getElementsByTagName("li");

      // convert the lis available to array
      Array.from(liAvailable).forEach(function (item) {
          // grabs the text content in the selected li
          let liText = item.firstChild.textContent;

          // checks if there is a match
          if (liText.toLowerCase().indexOf(filterText) != -1) {
              item.style.display = "block";
          } else {
              item.style.display = "none";
          }
      })

  }