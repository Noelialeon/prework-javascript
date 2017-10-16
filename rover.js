var myRover = {
  position: [0,0],
  previousPosition: [0,0],
  direction: 'N',
};

var yourRover = {
  position: [1,0],
  previousPosition: [1,0],
  direction: 'N',
};

var tree = {
  position: [Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 10) + 1)],
};

function moves() {
var drivingMyRover = prompt("The obstacle is at [" + tree.position[0] + ", " + tree.position[1] + "]. You are driving Rover 1. Please add a command: f, b, l or r. Add 'rover 2' to drive Rover 2");
if (drivingMyRover === null) {
    alert("You abandoned Rover 1 in Mars");
    return; //para evitar que se convierta en un pop-up molesto
   }
   switch(drivingMyRover) {
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
    case "rover 2":
       yourMoves();
           break;
  default:
      alert("Please press f, b, l or r"); moves();
       break;
     }
     nextStep();
}

function nextStep() {
  if ((myRover.position [0] === tree.position[0]) && (myRover.position[1] === tree.position[1])){
    alert("There is an Obstacle, Rover 1 position is [" + myRover.previousPosition[0] + ", " + myRover.previousPosition[1] + "]");
    myRover.position[0] = myRover.previousPosition[0];
    myRover.position[1] = myRover.previousPosition[1];
    moves();

  } else if ((myRover.position [0] === yourRover.position[0]) && (myRover.position[1] === yourRover.position[1])){
      alert("'Hi Rover 2!' Rover 1 position is [" + myRover.previousPosition[0] + ", " + myRover.previousPosition[1] + "]");
      myRover.position[0] = myRover.previousPosition[0];
      myRover.position[1] = myRover.previousPosition[1];
      moves();

  } else {
    var whereIsRover = alert("Actual Rover 1 Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]. Direction: " + myRover.direction);
        myRover.previousPosition[0] = myRover.position[0];
        myRover.previousPosition[1] = myRover.position[1];
        moves();
      }
 }

 function yourMoves() {
 var drivingYourRover = prompt("There is an obstacle at [" + tree.position[0] + ", " + tree.position[1] + "]. You are driving Rover 2. Please add a command: f, b, l or r. Add 'rover 1' to drive Rover 1");
 if (drivingYourRover === null) {
     alert("You abandoned Rover 2 in Mars");
     return;
    }
    switch(drivingYourRover) {
    case "f":
    goForward(yourRover);
        break;
    case "b":
    goBackward(yourRover);
        break;
    case "l":
    turnLeft(yourRover);
        break;
    case "r":
    turnRight(yourRover);
        break;
    case "rover 1":
        moves();
        break;
   default:
       alert("Please press f, b, l or r"); yourMoves();
        break;
      }
      yourNextStep();
 }

 function yourNextStep() {
   if ((yourRover.position [0] === tree.position[0]) && (yourRover.position[1] === tree.position[1])){
     alert("There is an Obstacle, Rover 2 Position is [" + yourRover.previousPosition[0] + ", " + yourRover.previousPosition[1] + "]");
     yourRover.position[0] = yourRover.previousPosition[0];
     yourRover.position[1] = yourRover.previousPosition[1];
     yourMoves();
     }
     if ((yourRover.position [0] === myRover.position[0]) && (yourRover.position[1] === myRover.position[1])){
       alert("'Hi Rover 1!' Rover 2 position is [" + yourRover.previousPosition[0] + ", " + yourRover.previousPosition[1] + "]");
       yourRover.position[0] = yourRover.previousPosition[0];
       yourRover.position[1] = yourRover.previousPosition[1];
       yourMoves();

     } else {
     var whereIsYourRover = alert("Actual Rover 2 Position: [" + yourRover.position[0] + ", " + yourRover.position[1] + "]. Direction: " + yourRover.direction);
         yourRover.previousPosition[0] = yourRover.position[0];
         yourRover.previousPosition[1] = yourRover.position[1];
         yourMoves();
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
      break;
    }
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
