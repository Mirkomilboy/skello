// =============== changing bg of nav on scroll ===============
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  document.querySelectorAll('.nav').forEach(function(element) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        element.style.cssText = "border-bottom: 1px solid #e3e3e3; background-color: #fff";
        // menuBtn.classList.add('!text-black')
    } else {
        element.style.cssText = "border-bottom: none; background-color: none";
        // menuBtn.classList.remove('!text-black')
    }
  })
};


// =============== menu show and hide on mobile ===============
const menuBtn = document.querySelectorAll('.menuBtn');
const mobileMenu = document.querySelector('.mobileMenu');

for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', function() {
        mobileMenu.classList.toggle('-translate-y-full');
    })
}