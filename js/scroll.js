      //SCROLL

const navbar= document.getElementById("navbar");

function scrollNavbar(){
   
    if(window.scrollY > 100){
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
}

window.addEventListener("scroll", scrollNavbar);