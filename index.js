function toggleTheme() {
    var element = document.body;
    
    // var checkBox = document.getElementById("themeSwitch");
    
    // if (checkBox.checked == true){
        element.classList.toggle("dark");
    // } 
    // else {
    //     element.classList.toggle("light");
    // }
}

function setInitialView(){
    var element = document.body;
    element.classList.toggle("light");
}

setInitialView();


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