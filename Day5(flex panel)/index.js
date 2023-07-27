const panels= document.querySelectorAll(".pannel");
function toggleOpen(){
    this.classList.toggle('open');
}
function speak(){
    console.log('clicked');
}
function toggleActive(e){
    console.log(e.propertyName);
    this.classList.toggle('open-active');
}
panels.forEach(panel=>panel.addEventListener('click',toggleOpen));
panels.forEach(panel=>panel.addEventListener('transitionend',toggleActive));
