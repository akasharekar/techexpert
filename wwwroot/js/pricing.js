

document.querySelector(".Net-show").addEventListener("click", () => {
    let elements = document.getElementsByClassName("lst-1");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "block") {
            elements[i].style.display = "none";
        } else {
            elements[i].style.display = "block";
        }
    }
});


document.querySelector(".s-s-show").addEventListener("click", () => {
    let elements = document.getElementsByClassName("lst-2");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "block") {
            elements[i].style.display = "none";
        } else {
            elements[i].style.display = "block";
        }
    }
});


document.querySelector(".sec-show").addEventListener("click", () => {
    let elements = document.getElementsByClassName("lst-3");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "block") {
            elements[i].style.display = "none";
        } else {
            elements[i].style.display = "block";
        }
    }
});

document.querySelector(".cs-show").addEventListener("click", () => {
    let elements = document.getElementsByClassName("lst-4");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "block") {
            elements[i].style.display = "none";
        } else {
            elements[i].style.display = "block";
        }
    }
});
