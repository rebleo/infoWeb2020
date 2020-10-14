
console.log("yay!")
var theClass = ["Abigail Meyer", "Amanda", "Andrew", , "Anita", "Anuska ",  "Afrin", "David", "Gil", "Jacob", "Jazmin", "Kathy", "Kelvin", "Michael","Muneeb", "Peta", "Rumana", "Ryan", "Sofia", "Tyra", "Will", "Wynne"] 

const theBody = document.querySelector('body');
const theTxt = document.querySelector('h3');
const theButton = document.querySelector("button");

theButton.addEventListener('click', theShuffle);

function theShuffle() {
     theButton.style.backgroundColor = "yellow"
     let theResults = []; 
     theClass.sort(() => Math.random() - 0.5);
     // console.log(theClass)
     for (let i =0; i < theClass.length; i++){
     //  console.log(theClass[i]);
      var node = document.createElement("p"); 
     theResults[i] = document.createTextNode(theClass[i]); 
     node.appendChild(theResults[i]);  
     // document.querySelector("h3").appendChild(node); 
     theTxt.appendChild(node); 
     theResults.splice(0, theResults.length);
     }     
}





