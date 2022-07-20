var toglebtn=document.getElementById("togle");
var topnav=document.querySelector("ul.topNav")
function togle(){
    
    if(topnav.style.display=="block"){
        topnav.style.display="none";
    }
    else{
        topnav.style.display="block";
    }
}
toglebtn.addEventListener("click",togle);