let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImg = './images/dice'+randomNumber1+'.png';
let randomImg2 = './images/dice'+randomNumber2+'.png';
document.querySelector('.img1').setAttribute('src',randomImg);
document.querySelector('.img2').setAttribute('src',randomImg2);
if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 has won";
} else if(randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = "Player 2 has won";
} else if(randomNumber1 === randomNumber2 || randomNumber2 === randomNumber1){
    document.querySelector('h1').innerHTML = "Draw";
}
function setTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
      themeSwitch.checked = true;
    } else {
      document.body.classList.remove('light-mode');
      themeSwitch.checked = false;
    }
  }
  const themeSwitch = document.getElementById('theme-switch');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
  themeSwitch.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  });
  