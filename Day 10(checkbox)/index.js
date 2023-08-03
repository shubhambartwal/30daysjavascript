const checkboxes = document.querySelectorAll(`.container input[type="checkbox"]`);
let lastChecked;

function handleClick(e) {
  // Check if they have the shift key down
  let inBetween = false;
    // Loop over every single checkbox
    if( this.checked){
 checkboxes.forEach(checkbox=>{
    console.log(checkbox)
    if(checkbox===this || checkbox===lastChecked)
    {
    inBetween=!inBetween;
    console.log('Started')
    }
    if(inBetween){
        checkbox.checked=true;
    }
 })  }
 lastChecked=this;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleClick);
});
