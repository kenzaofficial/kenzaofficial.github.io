document.addEventListener("DOMContentLoaded",() => {
   const headerMenuButton = document.querySelector("#headerMenuButton");
   const headerBurger = document.querySelector(".header__burger-button");
   // зачем мне дополнительная переменная на один и тот же елемент?
   const headerMenu = document.querySelector(".header__menu");
   const headerLink = document.querySelectorAll(".header__link")

   headerMenuButton.addEventListener('click', function () {
      this.classList.toggle('active');
      headerMenu.classList.toggle('active');
   })

   for ( let i= 0; i < headerLink.length; i++) {
      headerLink[i].addEventListener('click', function() {
         headerMenu.classList.remove('active');
         headerBurger.classList.remove('active');
      })
   }
});



