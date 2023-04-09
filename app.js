const menu = document.querySelector('#mobilemenu');
const menuLinks = document.querySelector('.navbar__menu');
const nextButton = document.querySelector('arrow__left');
const previewWebsite = document.getElementsByClassName("preview");
var counter = 0;

previewWebsite[0].style.opacity = 1;

menu.addEventListener('click', function()  {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

nextButton.addEventListener('click', function() {
    previewWebsite.style.opacity = '0';
    previewWebsite.style.transform = 'translateX(100%)';
    console.log("Asdf");
})


function changeFrames() {
    previewWebsite[counter].style.opacity = 0;
    if (counter + 1 == previewWebsite.length) {
        counter = 0;
    } else {   
         counter += 1;
    }
    previewWebsite[counter].style.opacity = 1;
  }
  



