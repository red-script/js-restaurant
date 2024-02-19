import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

// alert("Hello");

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');
const wipe = document.querySelector('body');

home.addEventListener('click', () => {
    wipe.innerHTML = '';
    homePage();
});

menu.addEventListener('click', () => {
    wipe.innerHTML = '';
    menuPage();
});

contact.addEventListener('click', () => {
    wipe.innerHTML = '';
    contactPage();
});

