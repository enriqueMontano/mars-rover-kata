// Rover Object Goes Here
// ======================

let rover = {
    first: {
      name: "rover1",
      direction: "N",
      x: 0,
      y: 0,
      travelLog: [0,0]
    },
    second: {
      name: "rover2",
      direction: "N",
      x: 9,
      y: 9,
      travelLog: [9,9]
    }
  };
  
  // e = empty 
  // O = obstacle              
  const board = [
    ['e','e','e','e','O','e','e','e','e','e'], // [0][4]
    ['e','e','e','O','e','e','e','e','e','e'], // [1][3]
    ['e','e','e','e','O','e','e','e','e','e'], // [2][4]
    ['e','e','e','e','e','e','e','O','e','e'], // [3][7]
    ['e','e','e','e','e','e','e','e','e','e'],
    ['e','e','e','O','e','e','e','e','e','e'], // [5][3]
    ['e','e','e','e','e','e','e','O','e','e'], // [6][7]
    ['e','O','e','e','e','e','e','e','e','e'], // [7][1]
    ['e','e','e','e','e','e','e','e','e','e'],
    ['e','e','O','e','e','e','e','e','e','e'], // [9][2]
  ];
  
  // ======================
  function turnLeft(rover){
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "N";
        break;
    }
    console.log(`The ${rover.name} direction has been update, now he's looking ${rover.direction}.`);
  }
  
  function turnRight(rover){
    switch (rover.direction) {
      case "N":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "N";
        break;
    }
    console.log(`The ${rover.name} direction has been update, now he's looking ${rover.direction}.`);
  }
  
  function moveForward(rover){
    switch(rover.direction) {
      case "W":
        if (rover.y > 0 && rover.y < 10){
          rover.y -=1;
          compare();
          if (board[rover.x][rover.y] === "e"){
            rover.travelLog.push(rover.x, rover.y);
            console.log(`The ${rover.name} direction has been update, he's looking ${rover.direction} now he stay on x = ${rover.x} and y = ${rover.y}`);
            } else {
              rover.y +=1;
              console.log("A strange obstacle prevents the passage...");            
            }
        } else {
          console.log(`You can't go out of the grid`);
        } 
        break;
        case "N":
        if (rover.x > 0 && rover.x < 10){
          rover.x -= 1;
          if (board[rover.x][rover.y] === "e"){
            rover.travelLog.push(rover.x, rover.y);
            console.log(`The ${rover.name} direction has been update, he's looking ${rover.direction} now he stay on x = ${rover.x} and y = ${rover.y}`);
            compare();
            } else {
              rover.x +=1;
              console.log("A strange obstacle prevents the passage...");            
            }
        } else {
          console.log(`You can't go out of the grid`);
        } 
        break;
        case "S":
        if (rover.x >= 0 && rover.x < 9){
          rover.x += 1;
          if (board[rover.x][rover.y] === "e"){
            rover.travelLog.push(rover.x, rover.y);
            console.log(`The ${rover.name} direction has been update, he's looking ${rover.direction} now he stay on x = ${rover.x} and y = ${rover.y}`);
            compare();
            } else {
              rover.x -=1;
              console.log("A strange obstacle prevents the passage...");            
            }
        } else {
          console.log(`You can't go out of the grid`);
        }
        break;
        case "E":
        if (rover.y >= 0 && rover.y < 9){
          rover.y += 1;
          if (board[rover.x][rover.y] === "e"){
            rover.travelLog.push(rover.x, rover.y);
            console.log(`The ${rover.name} direction has been update, he's looking ${rover.direction} now he stay on x = ${rover.x} and y = ${rover.y}`);
            compare();
            } else {
              rover.y -=1;
              console.log("A strange obstacle prevents the passage...");            
            }
        } else {
          console.log(`You can't go out of the grid`);
        }
        break;
    }
    compare();
  }
  
  function moveBackward(rover){
    switch(rover.direction) {
      case "W":
        if (rover.y >= 0 && rover.y < 9){
          if (board[rover.x][rover.y] === "e"){
            rover.y += 1;
            rover.travelLog.push(rover.x, rover.y);
            console.log(`The ${rover.name} direction has been update, he's looking ${rover.direction} now he stay on x = ${rover.x} and y = ${rover.y}`);
            compare();
            } else {
              rover.y -=1;
              console.log("A strange obstacle prevents the passage...");            
            }
        } else {
          console.log(`You can't go out of the grid`);
        }
        break;
        case "N":
        if (rover.x >= 0 && rover.x < 9){
          if (board[rover.x][rover.y] === "e"){
            rover.x += 1;
            rover.travelLog.push(rover.x, rover.y);
            console.log(`The ${rover.name} direction has been update, he's looking ${rover.direction} now he stay on x = ${rover.x} and y = ${rover.y}`);
            compare();
            } else {
              rover.x -=1;
              console.log("A strange obstacle prevents the passage...");            
            }
        } else {
          console.log(`You can't go out of the grid`);
        }
        break;
        case "S":
        if (rover.x > 0 && rover.x < 10){
          if (board[rover.x][rover.y] === "e"){
            rover.x -= 1;
            rover.travelLog.push(rover.x, rover.y);
            console.log(`The ${rover.name} direction has been update, he's looking ${rover.direction} now he stay on x = ${rover.x} and y = ${rover.y}`);
            compare();
            } else {
              rover.x +=1;
              console.log("A strange obstacle prevents the passage...");            
            }
        } else {
          console.log(`You can't go out of the grid`);
        }
        break;
        case "E":
        if (rover.y > 0 && rover.y < 10){
          if (board[rover.x][rover.y] === "e"){
            rover.y -= 1;
            rover.travelLog.push(rover.x, rover.y);
            console.log(`The ${rover.name} direction has been update, he's looking ${rover.direction} now he stay on x = ${rover.x} and y = ${rover.y}`);
            compare();
            } else {
              rover.y +=1;
              console.log("A strange obstacle prevents the passage...");            
            }
        } else {
          console.log(`You can't go out of the grid`);
        } 
        break;
    }
  }
  
  function compare() {
    if (rover.first.x === rover.second.x && rover.first.y === rover.second.y){
      console.log("Wild ROVER appeared!");
    }
  }
  
  function commandsList(stringMovesRover, stringMovesRover2) {
    for (let i = 0; i < stringMovesRover.length; i++) {
      switch (stringMovesRover[i]){
        case "f":
          moveForward(rover.first);
          break;
        case "b":
          moveBackward(rover.first);
          break;
        case "l":
          turnLeft(rover.first);
          break;
        case "r":
          turnRight(rover.first);
          break;
        default:
        console.log("Input error, maybe you used a letter other than l, r, f or b...");
      }
    }
    for (let o = 0; o < stringMovesRover2.length; o++) {
      switch (stringMovesRover2[o]){
        case "f":
          moveForward(rover.second);
          break;
        case "b":
          moveBackward(rover.second);
          break;
        case "l":
          turnLeft(rover.second);
          break;
        case "r":
          turnRight(rover.second);
          break;
        default:
          console.log("Input error, maybe you used a letter other than l, r, f or b...");
      }      
    }
    console.log(rover.first.travelLog);
    console.log(rover.second.travelLog);
  }
  
  let roverMoves = "rfrffffflff";
  let rover2Moves = "ffffflffffffflfbf";
  
  commandsList(roverMoves, rover2Moves);