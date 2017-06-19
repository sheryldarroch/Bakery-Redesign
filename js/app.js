const navDrop = document.querySelector('#nav-drop');
const navIcon = document.querySelector('#nav-icon');
let arrows = document.getElementsByClassName(".carousel-arrow");

//Navigation Drop Down
navIcon.addEventListener('click', (e)=>{
   if(navDrop.style.display !== "block") {
      navDrop.style.display = "block";
   } else {
          navDrop.style.display = "none";  
      }
});


//Carousel

//Find Index of node helper function
function findIndex(node) {
  let i = 1;
  while(node=node.previousElementSibling) {
    i++;
  }
  return i;
}

//// Show next or previous slide helper function to use with click arrows
//function showSlide(n) {
//  let slides = document.querySelectorAll('#carousel-slides');
//  let currentSlide = ;
//  let index = findIndex(currentSlide);
//  index += n;
//  if(index < 0) {
//      index = slides.length -1;
//  } else if (index >= slides.length) {
//      index = 0;
//    }
//    slides.style.display = "none";
//    slides[index].style.display = "block";
//}


//function clickCarouselArrow(e) {
//for ( i = 0; i < arrows.length; i ++ ) {
//  arrows[i].addEventListener("click", (event) => {
//      let target = event.target;
//    console.log(target);
//      if(target.is('.carousel-next')) {
//          showSlide(1);
//      } else {
//          showSlide(-1);
//      }
//   });
//}

//let prev = document.getElementById('prev');
//prev.addEventListener('click', ()=>{
//  showSlide(-1);  
//});
//clickCarouselArrow();