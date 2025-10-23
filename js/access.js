// ACCESSIBILITY
import {checkThemes} from './themes.js';

// global variables
window.darkMode = false;

const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const logo = document.querySelector("#logo");
const navContainer = document.querySelector(".nav-items-container");
const copyright = document.querySelector("#footer-copyright");
const credits = document.querySelector("#footer-credits");
const sidebarButton = document.querySelector("#sidebar-button");
const toggleThemesBtn = document.querySelector("toggle-themes-btn p");

const headerItems = document.querySelectorAll(".nav-items-container div a");
const footerItems = document.querySelectorAll(".nav-items-container .nav-items-footer a");
const navButtons = document.querySelectorAll(".nav-items-container button");
const navMenus = document.querySelectorAll(".nav-items-container .dropdown-menu");
const navMenuAnchors = document.querySelectorAll(".nav-items-container .dropdown-menu a");

// theme elements
const bgDark = document.querySelectorAll(".bg-dark");
const bgLight = document.querySelectorAll(".bg-light");
const textDark = document.querySelectorAll(".text-dark");
const textLight = document.querySelectorAll(".text-light");

window.onLoad = function()
{
    // import checkThemes function from themes.js
    window.checkThemes = checkThemes;
}

export function toggleDarkMode()
{
    window.darkMode = true;
    checkThemes();

    let a = 0; let b = 0;
    let c = 0; let d = 0;

    // LIGHT to DARK
    do
    {
        bgLight[a].classList.replace("bg-light", "bg-dark");
        a++;
    }
    while (a < bgLight.length);

    do
    {
        textLight[b].classList.replace("text-light", "text-dark");
        b++;
    }
    while (b < textLight.length);

    // DARK to LIGHT
    do
    {
        bgDark[c].classList.replace("bg-dark", "bg-secondary-subtle");
        c++;
    }
    while (c < bgDark.length);

    do
    {
        textDark[d].classList.replace("text-dark", "text-light");
        d++;
    }
    while (d < textDark.length);

    // inject internal styles
    const style = document.createElement("style");
    style.id = "dark-mode";
    style.innerHTML =
    `
    .nav-items a,
    .nav-items-footer a {color: #212529;}
    .nav-button, .nav-button-access {color: #212529;}

    .dropdown-menu .dropdown-item:hover,
    .dropdown-menu .dropdown-item:focus {background-color: #ff9393ff;}

    .nav-items-container div a,
    .nav-items-container .nav-items-footer a {color: #f8f9fa;}

    .nav-items-container div:hover,
    .nav-items-container div a:focus,
    .nav-items-container button:hover,
    .nav-items-container button:focus,
    .nav-items-container .nav-items-footer a:hover,
    .nav-items-container .nav-items-footer a:focus {color: grey !important;}
    `;
    
    // check internal style sheet isn't already added
    if (document.querySelector("style") === null)
    {
        document.head.appendChild(style);
    }

    // apply bg-secondary to header and footer
    header.classList.replace("bg-secondary-subtle", "bg-black");
    footer.classList.replace("bg-secondary-subtle", "bg-black");

    navButtons[0].classList.add("text-light"); // shapes button
    navButtons[1].classList.add("text-light"); // access button
    sidebarButton.classList.add("text-light"); // sidebar button

    navMenus[0].classList.replace("bg-secondary-subtle", "bg-black"); // shapes menu
    navMenus[1].classList.replace("bg-secondary-subtle", "bg-black"); // access menu

    // menu items
    for (let i = 0; i < navMenuAnchors.length; i++)
    {
        navMenuAnchors[i].classList.replace("text-dark", "text-light");
    }
    
    // customise footers
    copyright.classList.replace("text-info", "text-blue");
    credits.classList.replace("text-success", "text-green");

    // check toggle themes button exists
    if (document.querySelector("#toggle-themes-btn p"))
    {
        document.querySelector("#toggle-themes-btn p").textContent = "Light Mode";
    }
}

export function toggleLightMode()
{
    window.darkMode = false;
    checkThemes();

    let a = 0; let b = 0;
    let c = 0; let d = 0;

    // DARK to LIGHT
    do
    {
        bgLight[a].classList.replace("bg-dark", "bg-light");
        a++;
    }
    while (a < bgLight.length);

    do
    {
        textLight[b].classList.replace("text-dark", "text-light");
        b++;
    }
    while (b < textLight.length);

    // LIGHT to DARK
    do
    {
        bgDark[c].classList.replace("bg-secondary-subtle", "bg-dark");
        c++;
    }
    while (c < bgDark.length);

    do
    {
        textDark[d].classList.replace("text-light", "text-dark");
        d++;
    }
    while (d < textDark.length);

    // remove internal style sheet (if already injected)
    if (document.querySelector("#dark-mode")!== null)
    {
        document.querySelector("#dark-mode").remove();
    }
    if (navContainer.classList.contains("fw-bold"))
    {
        // remove bold font weight from nav items
        navContainer.classList.remove("fw-bold");
    }

    // reset header and footer backgrounds
    header.classList.replace("bg-black", "bg-dark");
    footer.classList.replace("bg-black", "bg-dark");

    navButtons[0].classList.remove("text-light"); // shapes menu
    navButtons[1].classList.remove("text-light"); // access menu
    sidebarButton.classList.remove("text-light"); // sidebar button

    navMenus[0].classList.replace("bg-black", "bg-dark"); // shapes menu
    navMenus[1].classList.replace("bg-black", "bg-dark"); // access menu
    
    // reset footer text
    copyright.classList.replace("text-blue", "text-info");
    credits.classList.replace("text-green", "text-success");

    if (copyright.classList.contains("fw-bold"))
    {
        // remove bold font weight
        copyright.classList.remove("fw-bold");
    }
    if (credits.classList.contains("fw-bold"))
    {
        // remove bold font weight
        credits.classList.remove("fw-bold");
    }

    // check toggle themes button exists
    if (document.querySelector("#toggle-themes-btn p"))
    {
        document.querySelector("#toggle-themes-btn p").textContent = "Dark Mode";
    }
}

export function toggleThemes()
{
    if (window.darkMode === true)
    {
        toggleLightMode();
    }
    else
    {
        toggleDarkMode();   
    }
}