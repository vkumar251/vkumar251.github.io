const sidebar = document.querySelector("#sidebar");
const sidebarPane = document.querySelector("#sidebar-pane");
const sidebarItems = document.querySelectorAll("#sidebar div a");

const rows = document.querySelectorAll(".row");

// responsive viewports
const smScreen = window.matchMedia("(max-width: 576px)");
const mdScreen = window.matchMedia("(max-width: 768px)");
const lgScreen = window.matchMedia("(max-width: 992px)");
const xlScreen = window.matchMedia("(max-width: 1200px)");
const xxlScreen = window.matchMedia("(max-width: 1600px)");

sidebar.className = "d-none";
sidebarPane.className = "d-none";

// event to listen for viewport changes
smScreen.addEventListener("change", changeBannerText);

// event to execute upon DOM load
document.addEventListener("DOMContentLoaded", function()
{
    logoAnimation();

    // repeat animation every 2.5 seconds after first execution
    setInterval(() => 
    {
        logoAnimation();
    }, 2500);
});

window.onload = function()
{
    viewport(smScreen);
    smScreen.addEventListener("change", viewport);

    if (window.darkMode === false)
    {
        for (let i = 0; i < sidebarItems.length; i++)
        {
            sidebarItems[i].classList.add("text-light");
        }
    }
    else
    {
        for (let i = 0; i < sidebarItems.length; i++)
        {
            sidebarItems[i].classList.add("text-dark");
        }
    }
}

function openSidebar()
{
    // append classes currently named d-none to d-block
    sidebar.className = "d-block";
    sidebarPane.className = "d-block";

    // change sidebar background colour if dark mode is enabled
    if (window.darkMode === true)
    {
        sidebar.classList.remove("bg-dark");
        sidebar.classList.add("bg-black");
        
        for (let i = 0; i < sidebarItems.length; i++)
        {
            sidebarItems[i].classList.add("text-light");
        }
    }
    else
    {
        sidebar.classList.remove("bg-black");
        sidebar.classList.add("bg-dark");
        for (let i = 0; i < sidebarItems.length; i++)
        {
            sidebarItems[i].classList.remove("text-dark");
            sidebarItems[i].classList.add("text-light");
        }
    }

    // create sidebar animation
    let width = 0;
    const animate = function()
    {
        sidebar.style.width = `${width}%`;
        width++;

        if (width <= 50)
        {
            // repeat animation until width reaches 50%
            animateLoop = setTimeout(animate, 0); 
            // note: 0 = miliseconds, replace with new value for slower animation
        }
        else
        {
            // end animation loop after completion
            clearInterval(animateLoop);
        }
    }

    animate();
}

function closeSidebar()
{
    const sidebar = document.querySelector("#sidebar");
    const sidebarPane = document.querySelector("#sidebar-pane");
    sidebarPane.className = "d-none";

    // create sidebar animation
    let width = 50;
    const animate = function()
    {
        sidebar.style.width = `${width}%`;
        width--;

        if (width >= 0)
        {
            // repeat animation until width reaches 0%
            animateLoop = setTimeout(animate, 0); 
        }
        else
        {
            sidebar.className = "d-none";

            // end animation loop after completion
            clearInterval(animateLoop); 
        }
    }

    animate();
}

function changeBannerText()
{
    const heading2 = document.querySelector("#home-banner h2");
    const heading3 = document.querySelector("#home-banner h3");

    // toggle font size between 3 and 4 when viewport is smScreen
    if (smScreen.matches)
    {
        heading2.classList.replace("fs-3", "fs-4");
        heading3.classList.replace("fs-3", "fs-4");
    }
    else
    {
        heading2.classList.replace("fs-4", "fs-3");
        heading3.classList.replace("fs-4", "fs-3");
    }
}

function logoAnimation()
{
    const logo = document.querySelector("#logo");
    const logoLetters = logo.querySelectorAll(".text-warning");
    
    let x = 0; let y = 1; let z = 0;

    // create 50ms interval for every 2 letters
    const interval = setInterval(() => 
    {
        logoLetters[x].classList.replace("text-warning", "text-yellow"); x++;
        logoLetters[y].classList.replace("text-warning", "text-yellow"); y++;

        // end loop after all letters are animated
        if (y >= logoLetters.length)
        {
            clearInterval(interval);
        }
    }, 50);

    // reset after first animation is completed
    setTimeout(function() 
    {
        const interval = setInterval(() => 
        {
            logoLetters[z].classList.replace("text-yellow", "text-warning"); z++;

            if (z >= logoLetters.length)
            {
                clearInterval(interval);
            }
        }, 50);
    }, 50);
}


// toggle class m-2 when viewport is smScreen
function viewport(value)
{
    rows.forEach(row => 
    {
        if (value.matches)
        {
            row.classList.add("m-2");
        }
        else
        {
            row.classList.remove("m-2");
        }
    });
}