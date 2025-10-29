const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

const readMoreButtons = document.querySelectorAll("btn");

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener("click", () => {
        const box = item.closest(".References");
        const readMoreText = box.querySelector(".text");

        if (readMoreText.style.maxHeight) {
            readMoreText.style.maxHeight = null;
            item.textContent = "More";
            item.style.backgroundColor = "#F28C28";
        } else {
            readMoreText.style.maxHeight = readMoreText.scrollHeight + "px";
            item.textContent = "Less";
            item.style.backgroundColor = "#e74c3c";
        }
    });
});