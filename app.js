var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab



function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Завершить испытание";
      document.getElementById("nextBtn").setAttribute('type', 'submit');
  } else {
    document.getElementById("nextBtn").innerHTML = "Следующий вопрос";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
      
    calc(); 
      
    document.getElementById("regForm").submit();
    submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

let score = 0;
let specScore = 0;

function add() {
    score++;
}

function addSpec() {
    specScore++;
}

function calc() {
    document.querySelector(".intro-block")
}

function zero() {
    document.querySelector(".zero-block").classList.add('hidden')
    document.querySelector(".intro-block").classList.remove('hidden')
}

function start() {
    document.querySelector(".intro-block").classList.add('hidden')
    document.querySelector(".form-block").classList.remove('hidden')
}



function submit() {

    if (document.querySelector('#first').checked) { add(); addSpec(); }
    if (document.querySelector('#second').checked) { add(); addSpec(); }
    if (document.querySelector('#third').checked) { add(); addSpec(); }
    if (document.querySelector('#four').checked) add();
    if (document.querySelector('#five').value.toLowerCase().trim() == 'завтрак у тиффани' || 
        document.querySelector('#five').value.toLowerCase().trim() == 'завтрак у тифани' || 
        document.querySelector('#five').value.toLowerCase().trim() == 'список шиндлера') add();
    if (document.querySelector('#six').checked) add();
    if (document.querySelector('#seven').checked) { add(); addSpec(); }
    if (document.querySelector('#eight').checked) add(); 
    // if (document.querySelector('#nine').checked) add();
    if (document.querySelector('#ten').checked) add(); 
    if (document.querySelector('#eleven').checked) add(); 
    if (document.querySelector('#twelve').checked) add();
    if (document.querySelector('#thirteen').checked) add();
    if (document.querySelector('#fourteen').checked) add();
    if (document.querySelector('#fifteen').checked) add();
    if (document.querySelector('#sixteen').checked) add();
    if (document.querySelector('#ga').value.toLowerCase().trim() == 'гарантуґ' ||
        document.querySelector('#ga').value.toLowerCase().trim() == 'гарантуг') add();

    document.querySelector(".form-block").classList.add('hidden')
    if (specScore < 2) {
        
        document.querySelector(".bad-result-block").classList.remove('hidden')
    } else {
        document.querySelector(".good-result-block").classList.remove('hidden')
        document.querySelector(".score").innerHTML = score;
    }

    
}

function playMusic(){
  var music = new Audio('./click.mp3');
  music.volume = 0.2;
  music.play();

}
  let labels = document.querySelectorAll('input');
  let btns = document.querySelectorAll('button');

  for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener('click', playMusic);
  }

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', playMusic);
  }

