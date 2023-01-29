console.log(5);
const mobilenavheader = document.querySelector(".main-header");
const mobilenavicon = document.querySelector(".bars")
mobilenavicon.addEventListener('click',function(){
    mobilenavheader.classList.toggle('clicked');
});
