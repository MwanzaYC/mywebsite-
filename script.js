window.onload = function() {
  alert("Welcome to my mobile-coded website!");
};
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
function changeText() {
  document.getElementById("message").innerText = "You clicked the button!";
}
let now = new Date();
document.body.innerHTML += `<p>Current time: ${now.toLocaleTimeString()}</p>`;