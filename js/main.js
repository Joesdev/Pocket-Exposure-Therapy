console.log('hello');
document.addEventListener('scroll', setNavOpacity);


function setNavOpacity(event){
   if(window.scrollY > 80) {
      document.getElementById('nav').style.opacity = 0.9;
   } else {
      document.getElementById('nav').style.opacity = 1;
   }
}