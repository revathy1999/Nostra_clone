// remove offer bar
var closeofferbar = document.getElementById("closeofferbar");
var offerbar=document.querySelector(".offer-bar")

closeofferbar.addEventListener('click', function(){
    offerbar.style.display="none";
})
// open side navbar
  document.addEventListener("DOMContentLoaded", function () {
    var sidenav = document.querySelector(".side__navbar");
    var openNav = document.getElementById("sidenav__activate");
    var closeNav = document.getElementById("close__sidenav");

    openNav.addEventListener("click", function () {
      console.log("Open sidenav");
      sidenav.classList.remove("hidden");
    });

    closeNav.addEventListener("click", function () {
      console.log("Close sidenav");
      sidenav.classList.add("hidden");
    });
  });

//   slider
const leftbutton=document.querySelector(".left__arrow");
const rightbutton=document.querySelector(".right__arrow");
const slideimages=document.querySelector(".slider-image-container");
let slidemargin=0;
leftbutton.addEventListener('click', function(){
    if(slidemargin==0){
        slidemargin=200
        slideimages.style.marginLeft="-"+slidemargin+"vw"
    }
    else{
        slidemargin-=100
        slideimages.style.marginLeft="-"+slidemargin+"vw"
    }
})
rightbutton.addEventListener('click', function(){
    slidemargin+=100;
    if(slidemargin>200){
        slidemargin=0
        slideimages.style.marginLeft=0;
    }
    else{
        slideimages.style.marginLeft="-"+slidemargin+"vw"
    }
})
// Like buttons

const productCards = document.querySelectorAll('.like-container');

  productCards.forEach(card => {
    const likeImage = card.querySelector('.like__image');
    const redHeart = card.querySelector('.red__heart');

    likeImage.addEventListener('click', () => {
      likeImage.classList.add('hidden');
      redHeart.classList.remove('hidden');
    });

    redHeart.addEventListener('click', () => {
      redHeart.classList.add('hidden');
      likeImage.classList.remove('hidden');
    });
  });