console.log("ES");
// empty variable to pass data into later
let theImage;

// here is an array holding string values that 
// also mean pixel values to the browser
let theColors = ["red", "orange", "yellow", "green", "blue"]
console.log(theColors);

function preload(){
  theImage = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/BakedPotatoWithButter.jpg/250px-BakedPotatoWithButter.jpg")
}


function setup(){
 //runs one time
 console.log("p5.js");
 createCanvas(500,500);
 
}

function draw(){
 //loop runs 60 fps
 background(155);
  fill(255,0,0)
  ellipse(400, 100, 100, 100);
  rect(mouseX, mouseY, 50,50)
  image(theImage, 100, 100, 100, 100);
 
  // here is a for loop creating multiple circles
  // loops through the array theColors and fills
  // the X values are: 50 px + (100 * theIndex)
  // bc a loop the variable i has 5 different values
  
  for (var theIndex = 0; theIndex < 5; theIndex++){
   fill(theColors[theIndex])
   ellipse(50 + 100 * theIndex, 300,50,50)
  }
    
  
}