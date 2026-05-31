function showScreen(screenId) {
const screens = document.querySelectorAll('.screen');

screens.forEach(screen => {
screen.classList.remove('active');
});

document.getElementById(screenId).classList.add('active');
}

function updateClock() {
const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();

const ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12;

minutes = minutes < 10 ? '0' + minutes : minutes;

document.getElementById('clock').innerHTML =
hours + ':' + minutes + ' ' + ampm;
}

updateClock();
setInterval(updateClock, 1000);

const menuButtons = document.querySelectorAll('.side-menu button');

menuButtons.forEach(button => {

button.addEventListener('click', () => {

```
menuButtons.forEach(btn => {
  btn.style.background = '#d9d9d9';
  btn.style.color = 'black';
  btn.style.boxShadow = 'none';
});

button.style.background = '#00e5ff';
button.style.color = 'black';
button.style.boxShadow = '0 0 15px #00e5ff';
```

});

});

menuButtons[0].style.background = '#00e5ff';
menuButtons[0].style.color = 'black';
menuButtons[0].style.boxShadow = '0 0 15px #00e5ff';

const emergencyBtn = document.querySelector('.emergency-btn');

if (emergencyBtn) {
emergencyBtn.addEventListener('click', () => {
alert('Emergency Call Activated\nContacting 999...');
});
}
const tempSlider = document.getElementById("tempSlider");
const tempValue = document.getElementById("tempValue");

if(tempSlider){
  tempSlider.addEventListener("input", () => {
    tempValue.innerHTML = tempSlider.value + "°C";
  });
}
const fanSlider = document.getElementById("fanSlider");
const fanValue = document.getElementById("fanValue");

if(fanSlider){

  fanSlider.addEventListener("input", () => {

    fanValue.innerHTML =
      "Fan Speed: " + fanSlider.value;

    const fan =
      document.querySelector(".fan-icon");

    if(fan){
      fan.style.animationDuration =
        (6 - fanSlider.value) + "s";
    }

  });

}
function increaseTemp(){
  const slider = document.getElementById("tempSlider");
  if(slider.value < 30){
    slider.value++;
    slider.dispatchEvent(new Event("input"));
  }
}

function decreaseTemp(){
  const slider = document.getElementById("tempSlider");
  if(slider.value > 16){
    slider.value--;
    slider.dispatchEvent(new Event("input"));
  }
}
let volumeTimeout;

function toggleVolume() {

  const popup =
    document.getElementById("volumePopup");

  popup.classList.add("active");

  clearTimeout(volumeTimeout);

  volumeTimeout = setTimeout(() => {
    popup.classList.remove("active");
  }, 3000);

}

const volumeControl =
  document.getElementById("volumeControl");

const volumeLevel =
  document.getElementById("volumeLevel");

volumeControl.addEventListener("input", () => {

  volumeLevel.innerHTML =
    volumeControl.value + "%";

  const popup =
    document.getElementById("volumePopup");

  popup.classList.add("active");

  clearTimeout(volumeTimeout);

  volumeTimeout = setTimeout(() => {
    popup.classList.remove("active");
  }, 3000);

});
let musicTimeout;

function toggleMusic(){

  const popup =
    document.getElementById("musicPopup");

  popup.classList.add("active");

  clearTimeout(musicTimeout);

  musicTimeout = setTimeout(() => {
    popup.classList.remove("active");
  }, 3000);

}
const leftFanSlider =
document.getElementById("leftFanSlider");

const leftFanValue =
document.getElementById("leftFanValue");

if(leftFanSlider){
  leftFanSlider.addEventListener("input", () => {
    leftFanValue.innerHTML =
      leftFanSlider.value;
  });
}

const rightFanSlider =
document.getElementById("rightFanSlider");

const rightFanValue =
document.getElementById("rightFanValue");

if(rightFanSlider){
  rightFanSlider.addEventListener("input", () => {
    rightFanValue.innerHTML =
      rightFanSlider.value;
  });
}
