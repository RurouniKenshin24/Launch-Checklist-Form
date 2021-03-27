function init(){
	const submitButton = document.getElementById("formSubmit");
	const form = document.querySelector("form");

	fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
		response.json().then(function(json){
			const missionTarget = document.getElementById("missionTarget");
			missionTarget.innerHTML = `<h2>Mission Destination</h2>
										<ol>
										   <li>Name: ${json[2].name}</li>
										   <li>Diameter: ${json[2].diameter}</li>
										   <li>Star: ${json[2].star}</li>
										   <li>Distance from Earth: ${json[2].distance}</li>
										   <li>Number of Moons: ${json[2].moons}</li>
										</ol>
										<img src="${json[2].image}">`
		});
	});

	    form.addEventListener("submit", function(event) {
	       	event.preventDefault();

	    	let pilotName = document.querySelector("input[name=pilotName]");
	        let copilotName = document.querySelector("input[name=copilotName]");
	        let fuelLevel = document.querySelector("input[name=fuelLevel]");
	        let cargoMass = document.querySelector("input[name=cargoMass]");

	        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
	        	alert("All fields are required!");
	        }else if(typeof (pilotName.value) != "string" || typeof (copilotName.value) != "string" || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
	        	alert("Make sure to enter valid information for each field!");
	        }else{
		        let faultyItems = document.getElementById("faultyItems");
		        let pilotStatus = document.getElementById("pilotStatus");
		        let copilotStatus = document.getElementById("copilotStatus");
		        let fuelStatus = document.getElementById("fuelStatus");
		        let cargoStatus = document.getElementById("cargoStatus");
		        let launchStatus = document.getElementById("launchStatus");

	        	if (fuelLevel.value < 10000) {
		        	pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
		        	copilotStatus.innerHTML = `Pilot ${copilotName.value} is ready`;
		        	fuelStatus.innerHTML = "Fuel level too low for launch"
		        	launchStatus.innerHTML = "Shuttle not ready for launch";
		        	launchStatus.style.color = "red";
		        	faultyItems.style.visibility = "visible";

	        	}else if (cargoMass.value > 10000) {
		        	pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
		        	copilotStatus.innerHTML = `Pilot ${copilotName.value} is ready`;
		        	cargoStatus.innerHTML = "Cargo mass too high for launch"
		        	launchStatus.innerHTML = "Shuttle not ready for launch";
		        	launchStatus.style.color = "red";
		        	faultyItems.style.visibility = "visible";
	        	}else{
		        	pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
		        	copilotStatus.innerHTML = `Pilot ${copilotName.value} is ready`;
		        	launchStatus.innerHTML = "Shuttle is ready for launch";
		        	launchStatus.style.color = "green";
		        	faultyItems.style.visibility = "visible";	        		
	        	}
	        }
	    });

}

window.addEventListener("load",init);
