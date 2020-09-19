//Select Elements
const $list = document.getElementById('list');
const $inputTask = document.getElementById('inputTask');
const $submitBtn = document.getElementById('submit');
const $alert = document.getElementById('alert');

//To Do List

const lists = []; //state of the todo list

let id = 1;

function renderList(li) {
	const $list = document.createElement('li');
	lists.id = $list.id;
	li.innerHTML = `
    <p id="text" class="text">${task}</p>
    <div id="taskListBtn">
      <span id="button-tick-${id}" class="material-icons tick-style">check_circle</span>
      <span id="button-edit-${id}" class="material-icons edit-style">edit</span>
      <span id="button-remove-${id}" class="material-icons remove-style">delete</span>
    </div>
    `;

	$list.appendChild(li);

	const $tickBtn = document.getElementById(`button-tick-${id}`);
	$tickBtn.addEventListener(
		'click',
		function() {
			const item = lists.find((item) => item.id === lists.id);

			// if item.done is true, it becomes false. Toggles the state.
			item.done = !item.done;
			item.done ? $list.classList.add('done') : $list.classList.remove('done');
		},
		false
	);
}

$submitBtn.addEventListener('click', function() {
	const task = $inputTask.value;

	//Create new list
	const list = {
		id,
		task
	};

	//Add to existing task
	lists.push(list);

	//Clear task in input
	$inputTask.value = '';

	//increment id so that each id is unique
	id++;

	renderList(list);
});

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
	$alert.style.visibility = 'visible';
	setTimeout(() => {
		$alert.style.visibility = 'hidden';
	}, 2000);
}

//Clock Settings
const $sessionMinus = document.getElementById('sessionMinus');
const $sessionPlus = document.getElementById('sessionPlus');
const $sessionTime = document.getElementById('sessionTime');
const $breakMinus = document.getElementById('breakMinus');
const $breakPlus = document.getElementById('breakPlus');
const $breakTime = document.getElementById('breakTime');

//Clock Time
const $min = document.getElementById('minutes');
const $sec = document.getElementById('seconds');

//Clock Buttons
const $clockStart = document.getElementById('clock-start');
const $clockPause = document.getElementById('clock-pause');
const $clockStop = document.getElementById('clock-stop');
const $clockReset = document.getElementById('clock-reset');

var sessionTime = parseInt($sessionTime.innerHTML);
var breakTime = parseInt($breakTime.innerHTML);

$sessionPlus.addEventListener('click', increaseSessionTime);
$sessionMinus.addEventListener('click', decreaseSessionTime);

$breakPlus.addEventListener('click', increaseBreakTime);
$breakMinus.addEventListener('click', decreaseBreakTime);

function increaseSessionTime() {
	var newTime = (sessionTime += 5);
	if (newTime > 0 && newTime <= 60) {
		$sessionTime.innerHTML = newTime;
		console.log(newTime);
	}
	return false;
}

function decreaseSessionTime() {
	var newTime = (sessionTime -= 5);
	if (newTime >= 0 && newTime < 60) {
		$sessionTime.innerHTML = newTime;
		console.log(newTime);
	}
	return false;
}

function increaseBreakTime() {
	var newTime = (breakTime += 5);
	if (newTime > 0 && newTime <= 30) {
		$breakTime.innerHTML = newTime;
	}
	return false;
}

function decreaseBreakTime() {
	var newTime = (breakTime -= 5);
	if (newTime >= 0 && newTime < 30) {
		$breakTime.innerHTML = newTime;
	}
	return false;
}
