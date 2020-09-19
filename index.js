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

// $clockStart.addEventListener('click', toggleClock);
// $clockStop.addEventListener('click', toggleClock(true));
// $clockReset.addEventListener('click', toggleClock());

// in seconds = 25 mins
let sessionDuration = 70;
let timeLeftInSession = 70;

// in seconds = 5 mins;
let breakDuration = 300;

let isClockRunning = false;
function toggleClock(reset) {
	if (reset) {
		// STOP THE TIMER
	} else {
		if (isClockRunning === true) {
			// PAUSE THE TIMER
			isClockRunning = false;
			clearInterval(clockTimer);
		} else {
			// START THE TIMER
			isClockRunning = true;
		}
	}
}

const clockTimer = setInterval(() => {
	timeLeftInSession--;
	displayTimeLeftInSession();
}, 1000);

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
