// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionof=document.getElementById("missionTarget");
missionof.innerHTML=`<h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance}  </li>
                    <li>Number of Moons:${moons}  </li>
                </ol>
                <img src=${imageUrl}>`
   
}
function validateInput(testInput) {
        if(testInput===undefined||testInput.trim()===""){
         return "Empty" 
        }
          if(false===isNaN(testInput)){
            return "Is a Number"
          }
          if(true===isNaN(testInput)){
            return "Not a Number"
          }
        
    }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) { 
    
  if(validateInput(pilot)==="Empty"||validateInput(pilot)==="Empty"||validateInput(pilot)==="Empty"||validateInput(pilot)==="Empty"){
    alert("Please Enter all fields")
  } 
  if(validateInput(pilot)==="Is a Number"||validateInput(pilot)==="Is a Number"){
    alert("Please Enter a String for Pilot and Copilot")
  }  
  if(validateInput(fuelLevel)==="Not a Number"||validateInput(cargoLevel)==="Not a Number"){
    alert("Please Enter a Number for FuelLevel abd Corgomass")
  }  
  
}





async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
});

    return planetsReturned;
}

function pickPlanet(planets) {
  let idx = Math.floor(Math.random() * planets.length);
  return planets[idx];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;