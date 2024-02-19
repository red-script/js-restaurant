import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

// alert("Hello");

document.addEventListener("DOMContentLoaded", () => {
    const wipe = document.querySelector('#content');

    const home = document.querySelector('#home');
    home.addEventListener('click', () => {
        wipe.innerHTML = '';
        homePage();
    });

    const menu = document.querySelector('#menu');
    menu.addEventListener('click', () => {
        wipe.innerHTML = '';
        menuPage();
    });

    const contact = document.querySelector('#about');
    contact.addEventListener('click', () => {
        wipe.innerHTML = '';
        contactPage();
    });
});
