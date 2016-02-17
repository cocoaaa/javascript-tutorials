var menu_div, menu_line, menu_img;//you can use ',' to declare multiple variables in the same line.

var pages_menu;

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
    
    //JS version of soln for the active learning(2)
    pages_menu = document.getElementById("pages-menu").children[0];
    //Create a new node
    new_menu = document.createElement("menuitem");
    new_menu.setAttribute('label', 'Next Page');
    new_menu.addEventListener('click', function(){
        window.open('mouse_timer.html');
        });
    pages_menu.appendChild(new_menu);
    console.log("appended the new menu");
    //End of solution
    
    


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