function validateLogin() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

// Add your server-side validation here, like checking against a database.

if (username === "yashbendresh" && password === "12345") {
window.location.href = "http://127.0.0.1:5502/register.html"; // Redirect to the dashboard upon successful login
} else {
alert("Invalid username or password. Please try again.");
}
}

document.querySelector(".btn_main").addEventListener("click", function (event) {
event.preventDefault();
validateLogin();
});
