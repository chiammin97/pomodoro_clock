//Select Elements
const $list = document.getElementById("list");
const $inputTask = document.getElementById("inputTask");

//Add TO Do Function
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

addToDo("Do Job");

/*
//allows user to key in value using Enter key
document.addEventListener("keyup", function(event)){
if (event.keyCode == 13) {
    const toDO = $inputTask.value;

    //check if the input is empty or not
    if(toDO){
        addToDo(toDo);
    }
    $inputTask.value = "";
}


}
*/
