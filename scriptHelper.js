// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;