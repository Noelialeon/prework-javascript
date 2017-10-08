var myRover = {
  position: [0,0],
  previousPosition: [0,0],
  direction: 'N',
};
var f, b, l, r;

var f = goForward(myRover);
var b = goBackward(myRover);
var l = turnLeft(myRover);
var r = turnRight(myRover);

var tree = {
  position: [Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 10) + 1)],};


function goForward(rover) {
  switch(rover.direction) {
    case 'N':
    if (rover.position[0] >= 10){
      rover.position[0] = 0;
    } else {
      rover.position[0]++;
    }
      break;
    case 'S':
    if (rover.position[0] <= 0){
      rover.position[0] = 10;
    } else {
      rover.position[0]--;
    }
      break;
    case 'E':
    if (rover.position[1] >= 10){
      rover.position[1] = 0;
    } else {
      rover.position[1]++;
    }
      break;
    case 'W':
    if (rover.position[1] <= 0){
      rover.position[1] = 10;
    } else {
      rover.position[1]--;
    }
      break;}

    if ((rover.position [0] === tree.position[0]) && (myRover.position[1] === tree.position[1])){
      rover.position[0] = rover.previousPosition[0];
      rover.position[1] = rover.previousPosition[1];
        console.log("There is an Obstacle, my Position is [" + rover.position[0] + ", " + rover.position[1] + "]");
      } else {
          console.log("Actual Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
          rover.previousPosition[0] = rover.position[0];
          rover.previousPosition[1] = rover.position[1];}

}

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
    if (rover.position[0] <= 0){
      rover.position[0] = 10;
    } else {
      rover.position[0]--;
    }
      break;
    case 'S':
    if (rover.position[0] >= 10){
      rover.position[0] = 0;
    } else {
      rover.position[0]++;
    }
      break;
    case 'E':
    if (rover.position[1] <= 0){
      rover.position[1] = 10;
    } else {
      rover.position[1]--;
    }
      break;
    case 'W':
    if (rover.position[1] >= 10){
      rover.position[1] = 0;
    } else {
      rover.position[1]++;
    }
      break;
  }  if ((rover.position [0] === tree.position[0]) && (myRover.position[1] === tree.position[1])){
      rover.position[0] = rover.previousPosition[0];
      rover.position[1] = rover.previousPosition[1];
        console.log("There is an Obstacle, my Position is [" + rover.position[0] + ", " + rover.position[1] + "]");
      } else {
          console.log("Actual Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
          rover.previousPosition[0] = rover.position[0];
          rover.previousPosition[1] = rover.position[1];}

}
function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
        rover.direction = 'E';
        break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'E':
    rover.direction = 'S';
      break;
    case 'W':
    rover.direction = 'N';
      break;
  }
    console.log("New Rover Direction:" + rover.direction);

}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
    rover.direction = 'W';
        break;
    case 'S':
    rover.direction = 'E';
      break;
    case 'E':
    rover.direction = 'N';
    break;
    case 'W':
    rover.direction = 'S';
      break;
    }
    console.log("New Rover Direction:" + rover.direction);

}
