var flag=0;
document.addEventListener('keydown',function(event){
    const key=event.keyCode;
if(key)
{
 playAndPause(); 
}
});
function playAndPause(){
    const audioA= document.getElementById("aud");
    audioA.play();
    setTimeout(function(){
audioA.pause();
    },2000)
//flag ? (audioA.pause(), flag = 0) : (audioA.play(), flag = 1);
}