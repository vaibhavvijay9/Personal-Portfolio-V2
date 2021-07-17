const toggleSwitch = document.getElementById("themeSwitch");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches) {
    toggleSwitch.checked = true;
    document.body.classList.toggle("dark");
}
// Listen for a change on switch
toggleSwitch.addEventListener('change', function() {
    // If the OS is set to dark mode...
    if (prefersDarkScheme.matches) {
      // ...then apply the .light class to override those styles
      document.body.classList.toggle("light");
      // Otherwise...
    } else {
      // ...apply the .dark class to override the default light styles
      document.body.classList.toggle("dark");
    }
});


// Tabs
function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();