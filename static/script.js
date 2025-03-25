var x = 5;
var y = 7;
var z = x + y;

console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;

console.log(C);

function SumNPrint(x1, x2) {
    var x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function getOrdinal(num) {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder = num % 100
    return num + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
}

// function findTheBanana(array) {
//     let count = 0;
//     array.forEach((item, index) => {
//         count++;
//         if (item === "Banana") {
//             alert("We found a Banana in the " + getOrdinal(count) + " array");
//         }
//     });
// }

// findTheBanana(L1);
// findTheBanana(L2);

function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");

    if (h < 12) {
        E.innerHTML = "Good morning, I am Jake";  
    } else if (h < 18) {
        E.innerHTML = "Good afternoon, I am Jake";
    } else if (h < 20) {
        E.innerHTML = "Good evening, I am Jake";
    } else {
        E.innerHTML = "Good night, I am Jake";
    }
}

greetingFunc();

function addYear() {
    const year = new Date().getFullYear();
    document.getElementById("copyYear").textContent = `© ${year}`;
}

function showList() {
    var list = document.getElementById("myList");
    var button = document.getElementById("showButton");
    list.style.display = "block";
    button.style.display = "none";
}

$(document).ready(function () {
    $('#readMoreBtn').click(function () {
        $('#shortBio').hide();
        $('#longBio').show();
        $('#readMoreBtn').hide();
        $('#readLessBtn').show();
    });

    $('#readLessBtn').click(function () {
        $('#longBio').hide();
        $('#shortBio').show();
        $('#readLessBtn').hide();
        $('#readMoreBtn').show();
    });
});

function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment");
    const message = document.getElementById("validationMessage");
    
    if (!name.checkValidity()) {
      message.innerHTML = name.validationMessage;
    } else if (!email.checkValidity()) {
      message.innerHTML = email.validationMessage;
    } else if (!comment.checkValidity()) {
      message.innerHTML = comment.validationMessage;
    } else {
      message.innerHTML = "Form submitted successfully!";
    }
}

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

function highlightActiveLink() {
    const navLinks = document.querySelectorAll('nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname;

        if (currentPath === linkPath) {
            link.classList.add('active');
        }
    });
}

window.onload = highlightActiveLink;