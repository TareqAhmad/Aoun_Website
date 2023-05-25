
let btnMenu = document.querySelector('.header #menu'); 
let nav = document.querySelector('.header .nav'); 

let sections = document.querySelectorAll('section'); 
let eleLinks = document.querySelectorAll('.nav ul li a'); 


let btnUp = document.querySelector('.btn-up'); 
let btnSocial = document.querySelector('.btn-social');



/*----------------------------------------------------------------------*/

btnMenu.onclick = function(){

  nav.classList.toggle("toggle-bar");
  btnMenu.classList.toggle("fa-times");
}

window.onload = function() {
  nav.classList.remove("toggle-bar");
  btnMenu.classList.remove("fa-times");
}

window.onscroll = function() {


  nav.classList.remove("toggle-bar");
  btnMenu.classList.remove("fa-times");


   sections.forEach (ele =>{
     
      let top = window.scrollY; 
      let height = ele.offsetHeight; 
      let offset = ele.offsetTop - 200;
      let id = ele.getAttribute('id');


      if(top >= offset && top < height + offset) {

         eleLinks.forEach(ele =>{
          
            ele.classList.remove("active");
            document.querySelector(".header .nav ul li a[href*="+id+"]").classList.add("active");
         });

      }

      if(top >= 350){
         btnUp.classList.add("show");
      }else {
         btnUp.classList.remove("show");
      }
   
   });


}

btnSocial.onclick = ()=>{

   btnSocial.classList.toggle("show");
}


// slide images 


let slideIndex = 0;

let slides = document.getElementsByClassName('tab');

setInterval(function(){
   slideIndex +=1;
    if(slideIndex <= slides.length){
      console.log(slideIndex);
      showSlides(slideIndex);
    }else if(slideIndex > slides.length){
      slideIndex = 0;
    }
   
},3000)

function showSlides(n) {

  for(let i = 0;i < slides.length; i++){
    slides[i].style.display="none";
  }
  
   slides[n-1].style.display = "block";
 

}



