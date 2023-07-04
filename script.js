// Write your JavaScript code here!

window.addEventListener("load", function() {

    let button = document.getElementById("formSubmit");

    button.addEventListener("click", function () {

let pilotName = document.getElementById("pilotName")
        
let coPilotInput = document.querySelector("input[name=copilotName]");

let fuelLevel=document.querySelector("input[name=fuelLevel]");

let cargoMass=document.querySelector("input[name=cargoMass]");


let list=document.getElementById("faultyItems")
formSubmission(document, list,pilotName.value,coPilotInput.value,fuelLevel.value,cargoMass.value)

    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});