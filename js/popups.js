//POPUP MANAGER

let activeId = "";

document.addEventListener("click", (event) => {
    if(event.target.tagName.toLowerCase() == "popup"){
        close(activeId);
    }
});

function open(id){ //Open a popup;
    if(!id) return;
    let element =  document.getElementById(id);
    element.classList.add("open");
    activeId = id;
    document.body.style = "overflow: hidden;";
    element.setAttribute("aria-hidden", false);
  [...document.getElementsByClassName("anchor-wrapper")][0].classList.remove("show");
}

function close(id){ //Close a popup;
    if(!id) return;
    let element =  document.getElementById(id);
    element.classList.remove("open");
    activeId = "";
    document.body.style = "";
    element.setAttribute("aria-hidden", true);

}

document.querySelector("#support-button").addEventListener("click", () => {open("support")});
document.querySelector("#close-support").addEventListener("click", () => {close("support")});