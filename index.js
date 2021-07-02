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