let timer;
let isRunning = false;
let minutes = 0;
let seconds = 15;
var format;

const startButton = document.getElementById('start');
const resetButton = document.getElementById('stop');
const pauseButton= document.getElementById("pause");
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startButton.textContent = 'Start';
        timer = setInterval(updateTimer, 1000);
	}
});
pauseButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        pauseButton.textContent = 'Pause';
        timer = setInterval(updateTimer, 1000);
	}
	else {
		isRunning = false;
		pauseButton.textContent = 'Resume';
		clearInterval(timer);
        
	}
    

});

resetButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    updateDisplay();
    startButton.textContent = 'Start';
});


    


function updateTimer() {
    if(minutes<=1)
        {
            document.getElementById("timer").style.color="red";
            
        }
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            alert('Time is up!');
            console.log("test");
            return;
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }
    updateDisplay();
}

function updateDisplay() {
   format=(minutes<10? "0":"")+minutes+":"+(seconds<10?"0":"")+seconds;
   document.getElementById("timer").innerHTML=format;

}
