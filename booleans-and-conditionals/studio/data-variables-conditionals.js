
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = '100%';
let weatherStatus = 'clear';
let preparedForLiftOff = true

if (astronautCount > 7) {
  console.log('This mission cannot have' + " " + astronautCount + " " + 'astronauts on board, shutting down launch operations.');
  preparedForLiftOff = false;
}

if (astronautStatus !== 'ready') {
  console.log('Not all' + " " + astronautCount + " " + 'astronauts are ready for launch, shutting down launch operations.');
  preparedForLiftOff = false;
}


if (totalMassKg > maximumMassLimit) {
  console.log('Total mass exceeds the maximum limit, shutting down launch operations.');
  preparedForLiftOff = false;
}

if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
  console.log('Fuel temperature is outside of designated range, shutting down launch operations.');
  preparedForLiftOff = false;
}


if (fuelLevel !== '100%') {
  console.log('Fuel level is not 100%, shutting down launch operations');
  preparedForLiftOff = false;
}


if (weatherStatus !== 'clear') {
  console.log('Weather conditions are dreadful, shutting down launch operations ');
  preparedForLiftOff = false;
}

if (preparedForLiftOff) {
  console.log('All systems are a go! Initiating space shuttle launch sequence.');
  console.log('----------------------------------------------------------------')
  console.log('Date:', date);
  console.log('Time:', time);
  console.log('Astronaut Count:', astronautCount);
  console.log('Crew Mass:', crewMassKg, 'kg');
  console.log('Fuel Mass:', fuelMassKg, 'kg');
  console.log('Shuttle Mass:', shuttleMassKg, 'kg');
  console.log('Total Mass:', totalMassKg, 'kg');
  console.log('Fuel Temperature:', fuelTempCelsius, '°C');
  console.log('Weather Status:', weatherStatus);
  console.log('-----------------------------------------------------------------')
  console.log('Have a safe trip astronauts!');
} else {
  console.log('Shuttle launch aborted. Check all systems and conditions.');
}
