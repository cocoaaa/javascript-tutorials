var menu_div, menu_line, menu_img;//you can use ',' to declare multiple variables in the same line.

window.onload = function(){ //this is an ananymous function (i.e. nameless).
    //Here do what you want to do after the window of your brower is loaded
    //Grab elements for contextmenu demo
    menu_div = document.getElementById("container-contextmenu");
    menu_line = document.getElementById("line-contextmenu");
    menu_img = document.getElementById("img-contextmenu");
    
    //Add eventlistener
    document.getElementById("blue").addEventListener("click", beBlue);
    //another event listener for "yellow" is directly added in HTML to show how a different way of adding a handler.
    
    menu_img.addEventListener("dblclick", changeVisibility);

}

function changeVisibility(){
    if (menu_img.style.display === "" || menu_img.style.visibility !=="hidden"){
        menu_img.style.display = "none";
    }
}

function beBlue(e){
    console.log("here");
    menu_line.style.color="blue";
}

function beYellow(e){
    menu_line.style.color="yellow";
}

function beDefault(){
    menu_line.style.color="black";
}