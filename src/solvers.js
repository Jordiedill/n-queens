/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  //have a counter variable for how many rooks have been placed 
  let counter = 0;
  //have an empty array to store column indexes on the board already
  let columns = []; //[0]
 
  //create a new board that is nxn
  let ourBoard = new Board({n:n});
  let solution;
  

  let looper = function() {
    //loop over rows from 0 to n
    for (var row = 0; row < n; row++) { //row is at 1
      //if we're in the first row...
      if (row === 0) {
        //add a piece at the "starting column" in the first row
        ourBoard.togglePiece(row,startingColumn);
        columns.push(startingColumn);
        counter++;
        continue;
      }
      for (var col=0; col < n; col++) { //col = 1
        if (columns.indexOf(col) > -1) {
          continue;
        }
        ourBoard.togglePiece(row,col);
        if (ourBoard.hasAnyRooksConflicts() === true) {
          ourBoard.togglePiece(row,col);
          continue
        } else {
          columns.push(col);
          counter++
          break;
        }
        
      }
      continue;
    }
    if (counter === n) {
      solution = ourBoard.rows();
    } else {
      counter = 0;
      startingColumn++;
      columns = [];
      return looper();
    }
  }

  looper()
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let solutionCount = 0; 
  let permute = function(n) {
    let numbers = Array.from(Array(n).keys())
    let result = []
    let recurse = function(options,n) {
      if (n===0) {
        result.push(options)
      } else {
        for(let x=0; x <numbers.length; x++) {
          recurse(options.concat(numbers[x], n -1))
        }
      }
    }
    recurse([],n);
    return result;

  }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
