
var todos = document.getElementById("todos");
var popup = document.getElementById("popup");
var popup1 = document.getElementById("popup1");
var todoDes;
var newTodo;


function applyBlur() {
    document.getElementById('todos').classList.add('blur');
    document.getElementById('headings').classList.add('blur');
  }
  
  function removeBlur() {
    document.getElementById('todos').classList.remove('blur');
    document.getElementById('headings').classList.remove('blur');
  }

  function checkNoCards() {
    var todosContainer = document.getElementById('todos');
    var noCardsMessage = document.getElementById('noCardsMessage');
    
    if (todosContainer.childElementCount === 1) {
      noCardsMessage.style.display = 'block';
    } else {
      noCardsMessage.style.display = 'none';
    }
  }
  function toggleCard(card) {
    
    var allCards = document.getElementsByClassName("todocard");
    var headingText = card.querySelector("h1").innerHTML;
    document.getElementById("heading").innerHTML = headingText;

    for (var i = 0; i < allCards.length; i++) {
        var currentCard = allCards[i];
        currentCard.classList.add("hidden");
        newTodo.classList.add("hidden");
            }
        
            card.classList.remove("hidden");
           
        
    
    document.getElementById("list1").style.display="none";

    if (headingText === "") {
      heading.style.display = "block";
    } else {
      heading.style.display = "flex";
      heading.style.justifyContent = "center";
      heading.style.alignItems = "center";
      heading.style.color = "white";
      heading.style.margin = "0px 0px 0px -160px";
    }
    heading.innerHTML = headingText;
    backButton.style.display = "block"; 
    
    document.getElementById("todos").style.justifyContent="space-evenly";
}

var backButton = document.createElement("button");
backButton.innerHTML = "Back";
backButton.classList.add("back-button");
backButton.style.display = "none"; // Initially hide the back button
backButton.style.fontSize = "35pt"; 
backButton.style.color= "white"; 
backButton.style.backgroundColor= "black"; 
backButton.style.border= "none"; 
backButton.style.margin= "20px 0px 0px 100px"; 

document.body.insertBefore(backButton, document.body.firstChild);



  var todoCount=0;
function createshow() {
    todoCount++;

newTodo = document.createElement("div");
var todoHeading = document.createElement("h1");
var hr = document.createElement("hr");
todoDes = document.createElement("div");
var buttonContainer = document.createElement("div");
var delTodo = document.createElement("button");
var addItem = document.createElement("button");

todos.appendChild(newTodo);
newTodo.appendChild(todoHeading);
newTodo.appendChild(hr);
newTodo.appendChild(todoDes);
newTodo.appendChild(buttonContainer);

todoHeading.innerHTML = taskname.value;
todoHeading.id="todoHeading";
todoHeading.style.color = "rgb(228, 81, 81)";

hr.style.border = "none";
hr.style.borderTop = "1px solid black";
hr.style.margin = "-20px  0 0 0";
hr.style.padding = "20px  0 0 0";
newTodo.classList.add("todocard");
newTodo.classList.add("new-card");
todoDes.classList.add("list");
delTodo.innerHTML='&#128465;';
delTodo.style.backgroundColor = "red";
delTodo.style.color = "white";
delTodo.style.width = "35px";
delTodo.style.height = "35px";
delTodo.style.borderRadius = "35px";
delTodo.style.fontSize= "30px";
delTodo.style.fontWeight = "bolder";
delTodo.style.border = "none";
addItem.innerHTML = "+";
addItem.style.fontSize="25pt";
addItem.style.color="white";
addItem.style.backgroundColor="blue";
addItem.style.borderRadius = "35px";
addItem.style.fontWeight="bolder";
addItem.style.border = "none";
buttonContainer.classList.add("button-container");

buttonContainer.appendChild(addItem);
buttonContainer.appendChild(delTodo);


addItem.addEventListener("click", function () {
  showPopup1();
  todoDes = this.parentNode.parentNode.querySelector(".list"); 
});

 delTodo.addEventListener("click", function () {
  this.parentNode.parentNode.remove(); 
  checkNoCards();
});

// checkNoCards();


// var backButton = document.createElement("button");
// backButton.innerHTML = "Back";
// backButton.classList.add("back-button");
// backButton.style.display = "none"; // Initially hide the back button
var allCards = document.getElementsByClassName("todocard");
var body = document.body;
todoHeading.addEventListener("click", function() {
  // body.classList.add("hide-scrollbar");
  toggleCard(this.parentNode);
  backButton.style.display = "block"; // Show the back button
});

backButton.addEventListener("click", function() {
    backButton.style.display = "none"; // Hide the back button
    var allCards = document.getElementsByClassName("todocard");
    document.getElementById("todoHeading").style.display = "none";
    document.getElementById("heading").innerHTML = "Tasks List";
    document.getElementById("heading").style.display = "block";
    document.getElementById("heading").style.margin = "0px 0px 0px 100px";
    document.getElementById("heading").style.color = "white";
    var todoHeading = document.querySelector("#todoHeading");
    var hr = document.querySelector("hr");
    
//  document.getElementById("heading").style.display = "block";
  // Show all cards
  for (var i = 0; i < allCards.length; i++) {
    var currentCard = allCards[i];
    currentCard.classList.remove("hidden");
  }
 
 
 backButton.style.display = "none";
  
  todoHeading.style.display = "block"; // Show the todoHeading
  hr.style.display = "block"; // Show the hr
  // body.classList.add("hide-scrollbar");
  
});

backButton.classList.add("center");

document.body.insertBefore(backButton, document.body.firstChild);
checkNoCards();
}

function showPopup() {
  popup.classList.add("show");
  applyBlur();
}

function showPopup1() {
  popup1.classList.add("show");
  applyBlur();
}

function hidePopup() {
  popup.classList.remove("show");
  popup1.classList.remove("show");
  removeBlur();
}

function addItemToList() {
createshow();
hidePopup();
}

function addItemToListToDes() {
  var newItem = document.createElement("div");
  newItem.innerHTML = taskname1.value;
  newItem.classList.add("item-container");

  var doneButton = document.createElement("button");
  doneButton.innerHTML = "Done";
  doneButton.classList.add("done-button");
  doneButton.addEventListener("click", function () {
      newItem.classList.add("done");
      doneButton.style.display="none";
      doneButton.style.color="red";

  });

  todoDes.appendChild(newItem);
  newItem.appendChild(doneButton);

  hidePopup();
}



