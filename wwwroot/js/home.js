
const animationAboutUs = bodymovin.loadAnimation({
    container: document.getElementById('aboutus'),
    path: '/assets/aboutus.json',
    loop: true,
    autoplay: true
});

const animationExpertise = bodymovin.loadAnimation({
    container: document.getElementById('expertise'),
    path: '/assets/solution.json',
    loop: true,
    autoplay: true
});

const animationTailored = bodymovin.loadAnimation({
    container: document.getElementById('Tailored'),
    path: '/assets/Tailored.json',
    loop: true,
    autoplay: true
});

const animationCustomer = bodymovin.loadAnimation({
    container: document.getElementById('customer'),
    path: '/assets/customer.json',
    loop: true,
    autoplay: true
});