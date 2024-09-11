var buttons = document.getElementsByClassName("drum");

function handleClick(){
    alert("MIMIM");
}

for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", handleClick);
}