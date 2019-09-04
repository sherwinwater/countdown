var count = setInterval(countDown, 1000);
function countDown() {
  const launchDate = new Date('Jan 1, 2020 00:00:00').getTime();
  const today = new Date().getTime();
  const timeLeft = launchDate - today;

  const days = document.querySelector('.days');
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');

  days.innerHTML = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
  hours.innerHTML = Math.floor(timeLeft % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
  minutes.innerHTML = Math.floor(timeLeft % (60 * 60 * 1000) / (1000 * 60));
  seconds.innerHTML = Math.floor(timeLeft % (60 * 1000) / (1000));

  if (timeLeft < 0) {
    clearInterval(count);
    const show = document.querySelector('.show');
    show.style.color = '#17a2b8';
    show.innerHTML = 'Launched!';
    // days.innerHTML = 'Launched!';
  }

}


// function countDown() {
//   const today = new Date();
//   console.log(today.getDay());

//   const days = document.querySelector('.days');
//   const hours = document.querySelector('.hours');
//   const minutes = document.querySelector('.minutes');
//   const seconds = document.querySelector('.seconds');

//   const opendays = 300;
//   const openhours = 22;
//   const openminutes = 59;
//   const openseconds = 59;

//   days.innerHTML = opendays - today.getHours();
//   hours.innerHTML = openhours - today.getHours();
//   minutes.innerHTML = openminutes - today.getMinutes();
//   seconds.innerHTML = openseconds - today.getSeconds();
// }
