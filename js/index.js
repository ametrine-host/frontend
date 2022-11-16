const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if(window.scrollY){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }
})

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const offerCycler = document.getElementById("cycler");
let cycle = 1;
setInterval(() => {
  if(cycle > offerCycler.children.length-1){
    cycle=0;
    offerCycler.style.transform = "translateY(0px)";
  }else{
    offerCycler.style.transform = `translateY(${-30*cycle}px)`;
  }
  cycle = cycle+1;
}, 5000);