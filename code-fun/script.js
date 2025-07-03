var button = 
document.getElementById("ctc"),
    count = 0;
button.onclick = function() {
    count += 1;
    button.innerHTML = "Click here! " + count;
}
