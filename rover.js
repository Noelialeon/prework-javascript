var myRover = {
  position: [0,0],
  previousPosition: [0,0],
  direction: 'N',
};

var tree = {
  position: [Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 10) + 1)],
};



function moves() {
var headingTo = prompt("There is an obstacle in [" + tree.position[0] + ", " + tree.position[1] + "]. Please add a command: f, b, l or r");
if (headingTo === null) {
    alert("You abandoned Rover in Mars");
    return; //para evitar que se convierta en un pop-up
   }
   switch(headingTo) {
   case "f":
   goForward(myRover);
       break;
   case "b":
   goBackward(myRover);
       break;
   case "l":
   turnLeft(myRover);
       break;
   case "r":
   turnRight(myRover);
       break;
  default:
      alert("Please press f, b, l or r"); moves();
       break;
     }
     nextStep();

}

function nextStep() {
  if ((myRover.position [0] === tree.position[0]) && (myRover.position[1] === tree.position[1])){
    alert("There is an Obstacle, my Position is [" + myRover.previousPosition[0] + ", " + myRover.previousPosition[1] + "]");
    myRover.position[0] = myRover.previousPosition[0];
    myRover.position[1] = myRover.previousPosition[1];
    moves();
    } else {
    var whereIsRover = alert("Actual Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]. Direction: " + myRover.direction);
        myRover.previousPosition[0] = myRover.position[0];
        myRover.previousPosition[1] = myRover.position[1];
        moves();
      }
 }

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
  }
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

}

moves();
