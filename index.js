//Select Elements
const $list = document.getElementById("list");
const $inputTask = document.getElementById("inputTask");
const $form = document.getElementById("form");
const $submit = document.getElementById("submit");
const $alert = document.getElementById("alert");

loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addToDo);
}

function addToDo(e) {
  const text = $inputTask.value;

  if (text === "") {
    showAlert();
  } else {
    const li = document.createElement("li"); //creates list
    li.className = "item";
    li.textContent = text;
    console.log(li);
    list.appendChild(li);
    $inputTask.value = "";
  }

  e.preventDefault();
}

function showAlert() {
  $alert.style.display = "block";
  setTimeout(() => {
    $alert.style.display = "none";
  }, 2000);
}

/*
//Add To Do Function
function addToDo(toDO) {
  const item = `
                <li class="item">
                <p class="text">${toDO}</p>
                <button id="button-remove"><i class="material-icons">remove</i>
                </button> 
                </li>
                `;
  const position = "beforeend";

  $list.insertAdjacentHTML(position, item);
}

/*
//Add item to list when user hits Enter key
document.addEventListener("keyup", function(event){
    if (event.keyCode == 13){
        const toDO = $inputTask.value;

        //check if input isnt empty
        if (toDO){
            addToDo(toDO);
        }
        $inputTask.value = "";

    }*/
