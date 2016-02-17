var shape; 
var myImg;
var emailField;

var images = ["0.png","1.png","2.gif","3.png"];//images to rotate

window.onload=init;
function init(){
    //Grab the DOM objects we will use 
    //First grab the image 
    myImg = document.getElementsByTagName("img")[0]; //you can use tags to grab elements. It returns a list of elements with the given tag name.
    emailField = document.getElementById("email");
    
    //Grab the shape. Initialize it to be a square
    shape = document.getElementById("shape");
    beSquare();
    

    //Add eventListners
    emailField.onfocus = clearField;
    emailField.onblur = fillField;
    shape.addEventListener("mouseover", beCircle);
    shape.onmouseout = beSquare; //another way to add an event listener
    //Start the timer
    setInterval(rotateImages, 1500);
}

var imageIdx = 0;
function rotateImages(){
    myImg.src = images[imageIdx];
    imageIdx ++;
    if (imageIdx >= images.length){
        imageIdx = 0;
    }
}

function beSquare(){
    //Notice this function is visible to the function "init" above even though 
    //it appears later in the script. If interested, read more about it (called "Javascript's hoisting") here: http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
    shape.style.width = 100; //default unit is "px"
    shape.style.height = "100px"; 
    shape.style.backgroundColor= "green"; //You can also set the attribute of an HTML element like this
    shape.style.borderRadius = null;
}

function beCircle(){
    //Again, this function is visible in the global scope.
    shape.style.backgroundColor="yellow";
    shape.style.borderRadius = "50%";

}

function clearField(){
    if (emailField.value !== ""){
        emailField.value = "";
    }
    console.log("Done clearing the field");
}

function fillField(){
    if (emailField.value === ""){
    emailField.value = "Enter email";
    }
    console.log("Done filling in the field again");
}


