document.addEventListener("DOMContentLoaded",() => {
   const headerBurger = document.querySelector(".header__burger-button");
   const headerMenu = document.querySelector(".header__menu");
   const headerLink = document.querySelectorAll(".header__link");
   const headerLogo = document.querySelector(".header__logo");
   const body = document.querySelector('.no-js');

   if(body.classList.contains('no-js')) {
    body.classList.remove('no-js');
   }

   headerBurger.addEventListener('click', function () {
      this.classList.toggle('active');
      headerMenu.classList.toggle('active');
      headerLogo.classList.toggle('active');
   })

   for ( let i= 0; i < headerLink.length; i++) {
      headerLink[i].addEventListener('click', function() {
         headerMenu.classList.remove('active');
         headerBurger.classList.remove('active');
      })
   }
});



