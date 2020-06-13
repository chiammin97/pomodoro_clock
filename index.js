//Select Elements
const $list = document.getElementById("list");
const $inputTask = document.getElementById("inputTask");
const $form = document.getElementById("form");
const $submit = document.getElementById("submit");
const $alert = document.getElementById("alert");

//To Do List

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
    <div id="taskListBtn">
      <span id="button-tick-${id}" class="material-icons tick-style">check_circle</span>
      <span id="button-edit-${id}" class="material-icons" edit-style>edit</span>
      <span id="button-remove-${id}" class="material-icons remove-style">delete</span>
    </div>
    `;

    console.log(li);
    $list.appendChild(li);
    $inputTask.value = "";

    //Done Button
    const $tickBtn = document.getElementById(`button-tick-${id}`);
    $tickBtn.addEventListener("click", function (done) {
      console.log("Marked as Done");
      li.classList.remove("item");
      li.classList.add("item-done");
      li.innerHTML = `
      <p class="text-done">${text}</p>
      <div id="taskListBtn">
        <span id="button-tick-${id}" class="material-icons tick-style">check_circle</span>
        <span id="button-edit-${id}" class="material-icons" edit-style>edit</span>
        <span id="button-remove-${id}" class="material-icons remove-style">delete</span>
      </div>
      `;
    });

    //Edit Button

    //Remove Button
    const $removeBtn = document.getElementById(`button-remove-${id}`);
    $removeBtn.addEventListener("click", function (remove) {
      const confirm = window.confirm("Delete Task?");

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

decreaseSession = 25;
$sessionMinus.onclick = function (e) {
  if (decreaseSession > 15) {
    decreaseSession -= 1;
    $sessionTime.innerHTML = decreaseSession;
  }
};

increaseSession = 25;
$sessionPlus.onclick = function (e) {
  if (increaseSession < 60) {
    increaseSession += 1;
    $sessionTime.innerHTML = increaseSession;
  }
};

decreaseBreak = 5;
$breakMinus.onclick = function (e) {
  if (decreaseBreak > 0) {
    decreaseBreak -= 1;
    $breakTime.innerHTML = decreaseBreak;
  }
};

increaseBreak = 5;
$breakPlus.onclick = function (e) {
  if (increaseBreak < 30) {
    increaseBreak += 1;
    $breakTime.innerHTML = increaseBreak;
  }
};
