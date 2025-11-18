// Simple interactivity: alert when form is submitted
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for submitting the form!");
});
