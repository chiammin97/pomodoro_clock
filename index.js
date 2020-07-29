//Select Elements
const $list = document.getElementById("list");
const $inputTask = document.getElementById("inputTask");
const $form = document.getElementById("form");
const $submit = document.getElementById("submit");
const $alert = document.getElementById("alert");

//To Do List

const list = []; //state of the todo list 

let id = 1;

function renderList(li) {
  const li = document.createElement("li");
  list.id = $list.id;
  li.innerHTML = `
    <p id="text" class="text">${task}</p>
    <div id="taskListBtn">
      <span id="button-tick-${id}" class="material-icons tick-style">check_circle</span>
      <span id="button-edit-${id}" class="material-icons edit-style">edit</span>
      <span id="button-remove-${id}" class="material-icons remove-style">delete</span>
    </div>
    `;

  $list.appendChild(li);
}

const $tickBtn = document.getElementById(`button-tick-${id}`);
$tickBtn.addEventListener("click", function() {
  const item = list.find(item => item.id === list.id);  
}
}

// function loadEventListeners() {
//   $form.addEventListener("submit", addToDo);
// }

// loadEventListeners();

// let id = 1;

// function addToDo(e) {
//   e.preventDefault();

//   const task = $inputTask.value;

//   if (task === "") {
//     showAlert();
//     return false;
//   } else {
//     const li = document.createElement("li"); //creates list

//     li.classList.add("item");
//     li.innerHTML = `
//     <p id="text" class="text">${task}</p>
//     <div id="taskListBtn">
//       <span id="button-tick-${id}" class="material-icons tick-style">check_circle</span>
//       <span id="button-edit-${id}" class="material-icons edit-style">edit</span>
//       <span id="button-remove-${id}" class="material-icons remove-style">delete</span>
//     </div>
//     `;

//     $list.appendChild(li);
//     $inputTask.value = "";

//     //Done Button
//     const $tickBtn = document.getElementById(`button-tick-${id}`);
//     $tickBtn.addEventListener("click", toggle);

//     function toggle() {
//       let changeClassOfLi = li;
//       changeClassOfLi.classList.toggle("item-done");

//       let changeClassOfText = document.getElementById("text");
//       changeClassOfText.classList.toggle("text-done");

//       console.log(li);
//     }

//     // const $tickBtn = document.getElementById(`button-tick-${id}`);
//     // $tickBtn.addEventListener("click", function Done() {
//     //   li.classList.add("item-done");
//     //   li.innerHTML = `
//     //   <p class="text-done">${text}</p>
//     //   <div id="taskListBtn">
//     //     <span id="button-tick-${id}" class="material-icons tick-style">check_circle</span>
//     //     <span id="button-edit-${id}" class="material-icons" edit-style>edit</span>
//     //     <span id="button-remove-${id}" class="material-icons remove-style">delete</span>
//     //   </div>
//     //   `;
//     //   $tickBtn.removeEventListener("click", Done);
//     // });

//     // //Un-Done Button
//     // $tickBtn.addEventListener("click", function Undone() {
//     //   li.classList.add("item");
//     //   li.innerHTML = `
//     //   <p class="text-done">${text}</p>
//     //   <div id="taskListBtn">
//     //     <span id="button-tick-${id}" class="material-icons tick-style">check_circle</span>
//     //     <span id="button-edit-${id}" class="material-icons" edit-style>edit</span>
//     //     <span id="button-remove-${id}" class="material-icons remove-style">delete</span>
//     //   </div>
//     //   `;
//     // });

//     //Edit Button

//     //Remove Button
//     const $removeBtn = document.getElementById(`button-remove-${id}`);
//     $removeBtn.addEventListener("click", function (remove) {
//       const confirm = window.confirm("Delete Task?");

//       if (confirm) {
//         li.remove();
//       }
//     });
//   }
//   id++;
// }

// Error Alert
function showAlert() {
  $alert.style.visibility = "visible";
  setTimeout(() => {
    $alert.style.visibility = "hidden";
  }, 2000);
}

//Clock Settings
const $sessionMinus = document.getElementById("sessionMinus");
const $sessionPlus = document.getElementById("sessionPlus");
const $sessionTime = document.getElementById("sessionTime");
const $breakMinus = document.getElementById("breakMinus");
const $breakPlus = document.getElementById("breakPlus");
const $breakTime = document.getElementById("breakTime");

//Clock Time
const $min = document.getElementById("minutes");
const $sec = document.getElementById("seconds");

//Clock Buttons
const $clockStart = document.getElementById("clock-start");
const $clockPause = document.getElementById("clock-pause");
const $clockStop = document.getElementById("clock-stop");
const $clockReset = document.getElementById("clock-reset");

decreaseSession = 60;
$sessionMinus.onclick = function (e) {
  if (decreaseSession > 15) {
    decreaseSession -= 5;
    $sessionTime.innerHTML = decreaseSession;
  }
};

increaseSession = 0;
$sessionPlus.onclick = function (e) {
  if (increaseSession < 60) {
    increaseSession += 5;
    $sessionTime.innerHTML = increaseSession;
  }
};

decreaseBreak = 0;
$breakMinus.onclick = function (e) {
  if (decreaseBreak > 0) {
    decreaseBreak -= 5;
    $breakTime.innerHTML = decreaseBreak;
  }
};

increaseBreak = 0;
$breakPlus.onclick = function (e) {
  if (increaseBreak < 30) {
    increaseBreak += 5;
    $breakTime.innerHTML = increaseBreak;
  }
};
