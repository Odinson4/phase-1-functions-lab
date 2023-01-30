// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks < 42) { return 42 - blocks; }
  else { return blocks - 42; }
}

function distanceFromHqInFeet(blocks) {
  distanceFromHqInBlocks();
  if (blocks < 42) { return (42 - blocks) * 264; }
  else { return (blocks - 42) * 264; }
}

function distanceTravelledInFeet(start, destination) {
  return distanceFromHqInFeet(distanceFromHqInBlocks(destination - start));
}

function calculatesFarePrice(start, destination) {
  distanceTravelledInFeet(start, destination);
  let numberOfFeet = distanceTravelledInFeet(start, destination);
  if (numberOfFeet <= 400) { return 0; }
  else if (numberOfFeet > 400 && numberOfFeet < 2000) {
    return (numberOfFeet - 400) * .02;
  } else if (numberOfFeet > 2000 && numberOfFeet < 2500) { return 25 }
  else if (numberOfFeet > 2500)
    return 'cannot travel that far';
}