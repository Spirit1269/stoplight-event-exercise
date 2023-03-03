const stopButton = document.getElementById("stopButton");
const slowButton = document.getElementById("slowButton");
const goButton = document.getElementById("goButton");
const stopLight = document.getElementById("stopLight");
const slowLight = document.getElementById("slowLight");
const goLight = document.getElementById("goLight");

stopButton.addEventListener("click", function(){
  if (stopLight.style.backgroundColor === "red"){
    stopLight.style.backgroundColor = "black"
  } else {
    stopLight.style.backgroundColor = "red";
  }
});
slowButton.addEventListener("click", function(){
  if ( slowLight.style.backgroundColor === "yellow"){
      slowLight.style.backgroundColor = "black";
  } else {
    slowLight.style.backgroundColor = "yellow";
  }
});
goButton.addEventListener("click", function(){
  if (goLight.style.backgroundColor === 'green') {
    goLight.style.backgroundColor = "black";
  } else {
    goLight.style.backgroundColor = "green";
  }
});
stopButton.addEventListener("click", function(){
  if (stopLight.style.backgroundColor === "red"){
    stopLight.style.backgroundColor = "black"
  } else {
    stopLight.style.backgroundColor = "red";
  }
});
slowButton.addEventListener("click", function(){
  if ( slowLight.style.backgroundColor === "yellow"){
      slowLight.style.backgroundColor = "black";
  } else {
    slowLight.style.backgroundColor = "yellow";
  }
});
goButton.addEventListener("click", function(){
  if (goLight.style.backgroundColor === 'green') {
    goLight.style.backgroundColor = "black";
  } else {
    goLight.style.backgroundColor = "green";
  }
});

