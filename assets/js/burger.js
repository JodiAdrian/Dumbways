let isOpen = false

function openburger() {
    let hamburgerBtn = document.getElementById("hamburgerId")
    let testing = document.getElementsByClassName("hamburger")
    console.log(testing);
    if (!isOpen) {
        hamburgerBtn.style.display = "block";
        isOpen = true
    } else {
        hamburgerBtn.style.display = "none";
        isOpen = false
    }
}