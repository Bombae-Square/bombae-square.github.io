

// Check if the media query is true
function home(){
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    
    if(mediaQuery.matches){
            
        document.getElementById("j").style.width="100vw";
        document.getElementById("j").style.marginTop="50%";
        document.getElementById("j").style.marginLeft= "3vw";
        
    }
    else{
        document.getElementById("j").style.width="50vw";
        document.getElementById("j").style.marginLeft= "23vw";          
    }   
    document.getElementById("blur").setAttribute("stdDeviation", "6");
    document.getElementById("k").style.marginTop="100vh"; 
}
function bruh(){
    document.getElementById("br").style.display="block";
    document.getElementById("cr").style.display="none";
    
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    
    if(mediaQuery.matches){
        document.getElementsByTagName("body")[0].style.overflow="scroll";
        document.getElementById("j").style.width="40vw";
        document.getElementById("j").style.marginTop="30vw";
        document.getElementById("j").style.marginLeft= "33vw";
    }
    else{
        document.getElementById("j").style.width="10vw";
        document.getElementById("j").style.marginLeft= "43vw";          
    }   
    document.getElementById("blur").setAttribute("stdDeviation", "0");
    document.getElementById("k").style.marginTop="32vh";       
}
function mf(){
    document.getElementById("br").style.display="none";
    document.getElementById("cr").style.display="block";    
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    if(mediaQuery.matches){
            
        document.getElementById("j").style.width="40vw";
        document.getElementById("j").style.marginTop="30vw";
        document.getElementById("j").style.marginLeft= "33vw";
    }
    else{
        
        document.getElementById("j").style.width="10vw";
        document.getElementById("j").style.marginLeft= "43vw";          
    }   
    document.getElementById("blur").setAttribute("stdDeviation", "0");
    document.getElementById("k").style.marginTop="32vh";   
}


var svgNS = "http://www.w3.org/2000/svg";

$('.pic').mousemove(function (event) {
 event.preventDefault();
 var upX = event.clientX;
 var upY = event.clientY;
 var mask = $('#mask1')[0];
 
 var circle = document.createElementNS(svgNS,"circle");
 circle.setAttribute("cx", upX);
 circle.setAttribute("cy", upY);
 circle.setAttribute("r", "50");
 circle.setAttribute("fill", "white");
 circle.setAttribute("filter", "url(#filter2)");
 
 mask.appendChild(circle);
 
 setTimeout(function(){ 
     circle.style.opacity = '0';
     setTimeout(function(){ 
         mask.removeChild(circle);
     }, 300);
 }, 300);
});

function myFunc() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
 x.className += " responsive";
} else {
 x.className = "topnav";
}
}
function myFunction(x) {
x.classList.toggle("change");
}
