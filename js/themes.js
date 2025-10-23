// THEMES - extension accessibility file
import {toggleDarkMode} from './access.js';
import {toggleLightMode} from './access.js';
import {toggleThemes} from './access.js';

window.onload = function()
{
    // make external functions accessible globally
    window.toggleDarkMode = toggleDarkMode;
    window.toggleLightMode = toggleLightMode;
    window.toggleThemes = toggleThemes;
}

export function checkThemes()
{
    switchBanner();
    switchMenuCards();
    switchHeadings();
}

// Homepage banner
function switchBanner()
{
    const banner = document.querySelector("#home-banner");
    const bannerH1 = document.querySelector("#home-banner h1");
    const bannerLink = document.querySelector("#home-banner-link");

    // check home banner exists within the DOM
    if (document.body.contains(banner))
    {
        if (window.darkMode === true)
        {
            // change banner to sunset gradient when dark mode is enabled
            banner.classList.replace("gradient-sunrise", "gradient-sunset");

            bannerH1.classList.replace("text-primary", "text-info");
            bannerH1.classList.replace("text-shadow-white", "text-shadow-black");

            // update hyperlink colour
            bannerLink.classList.replace("text-green-dark-hover", "text-green-light-hover");
        }
        else
        {
            banner.classList.replace("gradient-sunset", "gradient-sunrise");
            bannerH1.classList.replace("text-info", "text-primary");
            bannerH1.classList.replace("text-shadow-black", "text-shadow-white");

            // update hyperlink colour
            bannerLink.classList.replace("text-green-light-hover", "text-green-dark-hover");
        }
    }
}

// Main menu cards
function switchMenuCards()
{
    const arithmeticsCard = document.querySelector("#arithmetics-card"); // target parent element
    
    // arithmetics card
    if (document.body.contains(arithmeticsCard))
    {
        // scan for all children elements within parent id, arithmetics-card
        const bgDarkElements = arithmeticsCard.querySelectorAll(".bg-dark-subtle"); 
        const bgBlackElements = arithmeticsCard.querySelectorAll(".bg-black");

        if (window.darkMode)
        {
            let length = bgDarkElements.length;

            for (let i = 0; i < length; i++)
            {
                // replace all child elements within parent element, arithmetics-card
                bgDarkElements[i].classList.replace("bg-dark-subtle", "bg-black");
            }

            var heading = arithmeticsCard.querySelector("h3")
            heading.classList.replace("text-yellow", "text-orange");
        }
        else
        {
            let length = bgBlackElements.length;

            for (let i = 0; i < length; i++)
            {
                // replace all child elements within parent element, arithmetics-card
                bgBlackElements[i].classList.replace("bg-black", "bg-dark-subtle");
            }

            var heading = arithmeticsCard.querySelector("h3")
            heading.classList.replace("text-orange", "text-yellow");
        }
    }

    // shapes card
    const shapesCard = document.querySelector("#shapes-card");
    if (document.body.contains(shapesCard))
    {
        const shapesDarkElements = shapesCard.querySelectorAll(".bg-dark-subtle");
        const shapesBlackElements = shapesCard.querySelectorAll(".bg-black");

        if (window.darkMode)
        {
            let length = shapesDarkElements.length;
            for (let i = 0; i < length; i++)
            {
                shapesDarkElements[i].classList.replace("bg-dark-subtle", "bg-black");
            }

            var heading = shapesCard.querySelector("h3")
            heading.classList.replace("text-green-light", "text-green-dark");
        }
        else
        {
            let length = shapesBlackElements.length;
            for (let i = 0; i < length; i++)
            {
                shapesBlackElements[i].classList.replace("bg-black", "bg-dark-subtle");
            }

            var heading = shapesCard.querySelector("h3")
            heading.classList.replace("text-green-dark", "text-green-light");
        }
    }

    // BMI card
    const bmiCard = document.querySelector("#bmi-card");
    if (document.body.contains(bmiCard))
    {
        const bmiDarkElements = bmiCard.querySelectorAll(".bg-dark-subtle");
        const bmiBlackElements = bmiCard.querySelectorAll(".bg-black");

        if (window.darkMode)
        {
            let length = bmiDarkElements.length;
            for (let i = 0; i < length; i++)
            {
                bmiDarkElements[i].classList.replace("bg-dark-subtle", "bg-black");
            }

            var heading = bmiCard.querySelector("h3")
            heading.classList.replace("text-red-light", "text-red-dark");
        }
        else
        {
            let length = bmiBlackElements.length;
            for (let i = 0; i < length; i++)
            {
                bmiBlackElements[i].classList.replace("bg-black", "bg-dark-subtle");
            }

            var heading = bmiCard.querySelector("h3")
            heading.classList.replace("text-red-dark", "text-red-light");
        }
    }

    // accessibility card
    const accessCard = document.querySelector("#access-card");
    if (document.body.contains(accessCard))
    {
        const accessDarkElements = accessCard.querySelectorAll(".bg-dark-subtle");
        const accessBlackElements = accessCard.querySelectorAll(".bg-black");

        if (window.darkMode)
        {
            let length = accessDarkElements.length;
            for (let i = 0; i < length; i++)
            {
                accessDarkElements[i].classList.replace("bg-dark-subtle", "bg-black");
            }

            var heading = accessCard.querySelector("h3")
            heading.classList.replace("text-blue-light", "text-blue-dark");
        }
        else
        {
            let length = accessBlackElements.length;
            for (let i = 0; i < length; i++)
            {
                accessBlackElements[i].classList.replace("bg-black", "bg-dark-subtle");
            }

            var heading = accessCard.querySelector("h3")
            heading.classList.replace("text-blue-dark", "text-blue-light");
        }
    }
}

// Page headings
function switchHeadings()
{
    const arithmeticsH = document.querySelector("#arithmetics-heading");

    // arithmetics
    if (document.body.contains(arithmeticsH))
    {
        const title = arithmeticsH.querySelector("h2");
        if (window.darkMode)
        {
            arithmeticsH.classList.replace("gradient-light", "gradient-dark");
            title.classList.replace("text-orange", "text-yellow");
        }
        else
        {
            arithmeticsH.classList.replace("gradient-dark", "gradient-light");
            title.classList.replace("text-yellow", "text-orange");
        }
    }
}