//Select Elements
const $list = document.getElementById("list");
const $inputTask = document.getElementById("inputTask");
const $form = document.getElementById("form");
const $submit = document.getElementById("submit");
const $alert = document.getElementById("alert");
const $removeBtn = document.getElementById("button-remove");
const $editBtn = document.getElementById("button-edit");

loadEventListeners();

function loadEventListeners() {
  $form.addEventListener("submit", addToDo);
}

let id = 1;

function addToDo(e) {
  e.preventDefault();

  const text = $inputTask.value;

  if (text === "") {
    showAlert();
    return false;
  } else {
    const li = document.createElement("li"); //creates list

    li.classList.add("item");
    //li.innerHTML = `<li>${$inputTask.value}</li>`;
    li.innerHTML = `
    <p class="text">${text}</p>
    <span id="button-edit-${id}" class="material-icons">edit</>
    <span id="button-remove-${id}">
      <i class="material-icons">remove_circle</i>
    </span>
    `;
    console.log(li);
    $list.appendChild(li);
    $inputTask.value = "";

    const $removeBtn = document.getElementById(`button-remove-${id}`);
    $removeBtn.addEventListener("click", function (e) {
      const confirm = window.confirm("Are you sure?");

      if (confirm) {
        li.remove();
      }
    });
  }
  id++;
}

function showAlert() {
  console.log("alert");
  $alert.style.visibility = "visible";
  setTimeout(() => {
    $alert.style.visibility = "hidden";
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
