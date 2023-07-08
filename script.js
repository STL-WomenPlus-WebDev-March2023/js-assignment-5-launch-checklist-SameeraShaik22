// Write your JavaScript code here!


window.addEventListener("load", function() {
    
    let button = document.getElementById("formSubmit");

    button.addEventListener("click", function () {
        event.preventDefault();

let pilotName=document.getElementById("pilotName");

let copilotName= document.querySelector("input[name=copilotName]");
 
let fuelLevel= document.querySelector("input[name=fuelLevel]");
 
let cargoMass= document.querySelector("input[name=cargoMass]");
 
let list=document.getElementById("faultyItems");
formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
    })
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()

   let listedPlanetsResponse=myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       
   }).then(function () {
       console.log(listedPlanets);
// Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
 let getplanet=pickPlanet(listedPlanets)
 console.log(getplanet)

 let pilotdestintion=addDestinationInfo(document, getplanet.name,getplanet.diameter,getplanet.star,getplanet.distance,getplanet.moons,getplanet.image)
    })
   
});