//Select Elements
const $list = document.getElementById('list');
const $inputTask = document.getElementById('inputTask');
const $submitBtn = document.getElementById('submit');
const $alert = document.getElementById('alert');

//To Do List

const lists = []; //state of the todo list
let id = 1;

function renderToDo(toDoItem) {
	const list = document.createElement('li');
	list.id = toDoItem.id;
	list.innerHTML = `
    <p id="text" class="text">${toDoItem.task}</p>
    <div id="taskListBtn">
      <span id="button-tick-${toDoItem.id}" class="material-icons tick-style">check_circle</span>
      <span id="button-edit-${toDoItem.id}" class="material-icons edit-style">edit</span>
      <span id="button-remove-${toDoItem.id}" class="material-icons remove-style">delete</span>
    </div>
	`;
	list.classList.add('item');
	$list.appendChild(list);

	// const $tickBtn = document.getElementById(`button-tick-${id}`);
	// var toggleDone = true;
	// $tickBtn.addEventListener('click', function() {
	// 	toogleDone = !toggleDone;
	// 	toggleDone ? list.classList.add('done') : list.classList.remove('done');
	// });
}

$submitBtn.addEventListener('click', function(e) {
	e.preventDefault();
	//UPDATE STATE OF LISTS
	const task = $inputTask.value;
	const todo = {
		id,
		task
	};
	lists.push(todo);
	$inputTask.value = '';
	renderToDo(todo);
	console.log(todo);
	id++;
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
	}
	return false;
}

function decreaseSessionTime() {
	var newTime = (sessionTime -= 5);
	if (newTime >= 0 && newTime < 60) {
		$sessionTime.innerHTML = newTime;
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

//Clock Time
const $min = document.getElementById('minutes');
const $sec = document.getElementById('seconds');

//Clock Buttons
const $clockStart = document.getElementById('clock-start');
const $clockStop = document.getElementById('clock-stop');
const $clockReset = document.getElementById('clock-reset');

//Toggle Start Pause Button
var startPause = true;
$clockStart.addEventListener('click', toggleStartPauseButton);
function toggleStartPauseButton() {
	startPause = !startPause;
	startPause ? ($clockStart.innerHTML = 'Start') : ($clockStart.innerHTML = 'Pause');
}

$clockStart.addEventListener('click', startPauseTimer);
// $clockStop.addEventListener('click', toggleClock(true));
// $clockReset.addEventListener('click', toggleClock());

// in seconds = 25 mins
let sessionDuration = 1500;
let timeLeftInSession = 1500;

// in seconds = 5 mins;
let breakDuration = 300;

function displayTimeLeftInSession() {
	const secondsLeft = timeLeftInSession;
	const seconds = secondsLeft % 60;
	const minutes = parseInt(secondsLeft / 60);
	$sec.innerHTML = seconds;
	$min.innerHTML = minutes;
	//ADD ZERO IF LESS THAN 10
	if (seconds < 10) {
		$sec.innerHTML = `0${seconds}`;
	}
	if (minutes < 10) {
		$min.innerHTML = `0${minutes}`;
	}
}

function startPauseTimer() {
	let isClockRunning = true;
	if (isClockRunning) {
		const timer = setInterval(() => {
			timeLeftInSession--;
			displayTimeLeftInSession();
		}, 1000);
	} else {
		console.log('click');
		clearInterval();
	}
}
