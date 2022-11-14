const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if(window.scrollY){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }
})