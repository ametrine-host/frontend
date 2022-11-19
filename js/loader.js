document.body.onload = () => {
    document.querySelector("loader").classList.add("loaded");
    setTimeout(()=>{
        document.querySelector("loader").remove();
    },500);
};