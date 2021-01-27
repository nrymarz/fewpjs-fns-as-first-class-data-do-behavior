/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString){
  let hour = timeString.slice(0,2).replace(':','');
  let str = '';
  if(hour < 12) {str = `Good Morning`}
  else if(hour < 17){str = "Good Afternoon"}
  else{str = "Good Evening"}
  return str;
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(message){
  document.querySelector("#greeting").innerText = message;
}
