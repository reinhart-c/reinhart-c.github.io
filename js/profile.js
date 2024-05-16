const el = document.querySelector('#profile');
const fx = new TextScramble(el);
fx.setText("PROFILE");

const img = document.querySelectorAll(".skillToolsItem img")

// document.body.onmousemove=moveCursor;
var curTxt=document.createElement('div');
curTxt.id="cursorText";
curTxt.innerHTML="";
document.body.appendChild(curTxt);

img.forEach(function(img){
    img.addEventListener('mouseover', function() {
        img.addEventListener('mousemove', function(e) {
            curTxt.style.left=(e.pageX+20)+'px';
            curTxt.style.top=e.pageY+'px';
            curTxt.innerHTML=img.alt;
        });
      });
    img.addEventListener('mouseout', function(e) {
        curTxt.style.left='0px';
        curTxt.style.top='0px';
        curTxt.innerHTML='';
      });
});
  
