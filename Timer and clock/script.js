function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format

    const year = now.getFullYear();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[now.getMonth()];
    const day = now.getDate().toString().padStart(2, '0');

    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    clockElement.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
    dateElement.textContent = `${month} ${day}, ${year}`;
}

// Initial call to set the clock when the page loads
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

let timerInterval;
let timerMilliseconds = 0;
let flagCount = 1;

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 10); // Update every 10 milliseconds for more accuracy
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerMilliseconds = 0;
    updateTimerDisplay();

    // Clear the flagged times and reset flag count
    const flagList = document.getElementById('flagList');
    flagList.innerHTML = '';
    flagCount = 1;
}

function markInstant() {
    const flagTime = formatTime(timerMilliseconds);

    // Append the flagged time to the list
    const flagList = document.getElementById('flagList');
    const flagListItem = document.createElement('li');
    flagListItem.className = 'flag-list-item';
    flagListItem.textContent = `Flag ${flagCount}: ${flagTime}`;
    flagList.appendChild(flagListItem);

    flagCount++;
}

function updateTimer() {
    timerMilliseconds += 10; // Increment by 10 milliseconds
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const currentTime = formatTime(timerMilliseconds);
    document.getElementById('timerDisplay').textContent = currentTime;
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;
    const remainingMilliseconds = Math.floor((milliseconds % 1000) / 10); // Use one digit for milliseconds

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}.${remainingMilliseconds.toString().padStart(1, '0')}`;
}

