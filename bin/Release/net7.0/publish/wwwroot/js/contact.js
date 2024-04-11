
const baseUri = "/api/";

const buttonWarranty = document.getElementById("button-submit");
const cForm = document.getElementById("contact-form");

const popUp = document.getElementById("popup1");
const buttonClose = document.getElementsByClassName("close")[0];

buttonClose.addEventListener("click", () => {
    const popUp = document.getElementById("popup1");
    popUp.classList.remove("overlay-target");
    popUp.classList.add("overlay");
});

buttonWarranty.addEventListener("click", () => {

    event.preventDefault();

    if (cForm.checkValidity() !== true) {
        return false;
    } 

    const request = {
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("phn").value,
        message: document.getElementById("message").value,
    };

    (async () => {
        fetch(baseUri + "Contact", {
            method: "POST",
            mode: "cors",
            referrerPolicy: "no-referrer",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        })
            .then((response) => response.json())
            .then((data) => {
                cForm.reset();
                showMessage("Thank you for contacting us. Our representative will contact you shortly.");
            })
            .catch((error) => showMessage("Unable to submit your request. Kindly try again later."));
    })();

});

const showMessage = (message) => {

    document.getElementsByClassName("content")[0].innerHTML = message;

    popUp.classList.remove("overlay");
    popUp.classList.add("overlay-target");

};