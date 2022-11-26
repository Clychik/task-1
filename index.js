const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => {
    const timer = setInterval(function () {
      sec = seconds%60
      min = seconds/60%60
      hour = seconds/60/60%60
      if (seconds <= 0) {
         clearInterval(timer);
          alert("Время закончилось");
      } else {
          let strTimer = `${Math.trunc(hour)}:${Math.trunc(min)}:${sec}`;
          timerEl.innerHTML = strTimer;
      }
      --seconds;
  }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', 
  function(){
    this.value = this.value.replace(/[^\d.]/g, '');
  }
);

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
