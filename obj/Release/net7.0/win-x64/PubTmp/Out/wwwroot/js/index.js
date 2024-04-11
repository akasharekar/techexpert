let hambuger = document.getElementById('hamburger');
let cross = document.getElementById('cross');
let mobNav = document.getElementById('movnav');
let allMobNav = document.querySelectorAll('.all-mob-nav');
let landHeader = document.getElementById('landing-menu');

hambuger.addEventListener('click', () => {
    mobNav.classList.toggle("nav-active");
    cross.classList.toggle("d-none");
    allMobNav.forEach(function (e) {
        e.classList.toggle('d-none')
    });
    landHeader.classList.add('fixed');
});

cross.addEventListener('click', () => {
    mobNav.classList.toggle("nav-active");
    cross.classList.toggle("d-none");
    allMobNav.forEach(function (e) {
        e.classList.toggle('d-none')
    });
    landHeader.classList.add('fixed');
    setTimeout(() => {
        landHeader.classList.remove('fixed');
    }, 500);
});

document.getElementsByClassName("raise-ticket-btn")[0].addEventListener("click", () => {
    event.preventDefault();    

    const wOpener = window.open("https://customer.techxpert.net", "_blank");

    wOpener = null;
});