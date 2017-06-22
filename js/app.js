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
