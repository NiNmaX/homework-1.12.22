let text ;
switch (new Date().getDay()){
  case 0:
    text = "Bugun Yaxshanba";
    break;
  case 1:
    text = "Bugun Dushanba";
    break;
  case 2:
    text = "Bugun Seshanba";
    break;
  case 3:
    text = "Bugun Chorshanba";
    break;
  case 4:
    text = "Bugun Payshanba";
    break;
  case 5:
    text = "Bugun Juma";
    break;
  case 6:
    text = "Bugun Shanba";
    break;
}

document.getElementById("demo").innerHTML = text;

const toggle = document.getElementById("toggleDark");
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
  this.classList.toggle('bi-brightness-high-fill');
  if(this.classList.toggle('bi-moon')){
    body.style.background = '#003A3D';
    body.style.transition = '2s';
  }else{
    body.style.background = 'white';
    body.style.transition = '2s';
  }
})