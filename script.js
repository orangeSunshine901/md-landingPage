
window.addEventListener("load", () =>{
    const preload = document.querySelector(".preload");
    preload.classList.add("loader-finish")
});

// const landingPage1 = document.querySelector(".landingPage1")
// const landingPage2 = document.querySelector(".landingPage2")

// landingPage1.addEventListener("click",(e)=>{
//     console.log(e.layerY);
// })
window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    console.log(scrollable)
})