const offerCycler = document.getElementById("cycler");
let cycle = 1;
setInterval(() => {
  let amount = cycle > offerCycler.children.length-1 ? 0 : -30*cycle;
  amount == 0 ? cycle = 0 : 0;
  offerCycler.style.transform = `translateY(${amount}px)`;
  cycle = cycle+1;
}, 5000);

let interval;
document.getElementById("open-nav").addEventListener("click",async()=>{
  [...document.getElementsByClassName("anchor-wrapper")][0].classList.add("show");
    interval = setInterval(()=>{
    window.scroll(0,0);
    if(window.scrollY == 0){
      document.body.style="overflow-y:hidden;";
      clearInterval(interval);
    }
  },10);
});

document.getElementById("close-nav").addEventListener("click",()=>{
  clearInterval(interval);
  [...document.getElementsByClassName("anchor-wrapper")][0].classList.remove("show");
  document.body.style="";
});

document.getElementById("nav-backdrop").addEventListener("click",()=>{
  clearInterval(interval);
  [...document.getElementsByClassName("anchor-wrapper")][0].classList.remove("show");
  document.body.style="";
});