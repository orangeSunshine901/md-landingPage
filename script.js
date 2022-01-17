// const scroll = document.querySelectorAll(".scrollObserver")



// const observer = new IntersectionObserver( 
//     entries => {
//         entries.forEach(entry => {
//             entry.target.classList.toggle("show", entry.isIntersecting)
//         })
// }
// )

// scroll.forEach( scrolls => {
//     observer.observe(scrolls)
// })


window.addEventListener("load", () =>{
    const preload = document.querySelector(".preload");
    preload.classList.add("loader-finish")
});