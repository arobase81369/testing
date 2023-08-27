
/*

let carousel = document.querySelector(".vcarousel");
let carouselItem = document.querySelectorAll(".vcarousel-item");
let prev = document.querySelector(".prev-btn");
let next= document.querySelector(".next-btn");

 let itemwidth = carouselItem.offsetWidth;
 let position = 0;

 console.log("carousel"+carousel.offsetWidth);
 

 carouselItem.forEach(element => {
    console.log(element.offsetWidth);
    console.log(element);
 });



 prev.addEventListener("click", function() {

    position += itemwidth;
    position = Math.min(position, 0);
    console.log(itemwidth);
    console.log(position);

 });

 next.addEventListener("click", function() {
    position -= itemwidth;
    const maxposition = -(carouselItem.offsetWidth - carousel.offsetWidth);
    position = Math.max(position, maxposition);
    console.log(position);
 })

 */