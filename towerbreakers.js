function towerBreakers(n, m) {
  // Write your code here
  let currentState = [];
  for (let i = 1; i <= n; i++) {
    currentState.push(m);
  }
  let player1 = true;
  let player2 = false;

  //  FIND ALL POSSIBLE MOVES IN A GIVEN STATE
  function findAllOptions(state) {
    if (state.every((element) => element === 1)) {
      return false;
    } else {
      let options = state.reduce((acc, curr) => {
        let dividers = [];
        for (let i = curr - 1; i >= 1; i--) {
          if (curr % i === 0 && curr !== 1) {
            dividers.push(i);
          }
        }
        acc.push(dividers);
        return acc;
      }, []);
      return options;
    }
  }
  //

  // FIGURE OUT WHAT STATE WILL BE AFTER A PROPOSED MOVE
  function potentialMove(towerIndex, newHeight) {
    let nextState = [...currentState];
    nextState[towerIndex] = newHeight;
    return nextState;
  }
  //

  // START PLAYING AS PLAYER1 AND PLAYER2 TAKES TURNS
  while (true) {
    let allOptions = findAllOptions(currentState);

    // return winner
    if (!allOptions) {
      if (player1) {
        return 2;
      } else if (player2) {
        return 1;
      }
    }
    //

    // FIND WINNING OPTIONS
    let validOptions = allOptions.map((options, i) => {
      return options.filter((option) => {
        let nextPossibleState = potentialMove(i, option);
        if (!findAllOptions(nextPossibleState)) {
          return option;
        }
      });
    });
    //

    // IN CASE OF NO WINNING MOVES, JUST TERMINATE A RANDOM TOWER TO REDUCE REDUNDANCY
    if (validOptions.every((element) => element.length === 0)) {
      currentState = potentialMove(
        allOptions.indexOf(allOptions.find((option) => option.length !== 0)),
        1
      );
    }
    //

    // MAKE THE WINNING MOVE IF FOUND
    else {
      currentState = potentialMove(
        validOptions.indexOf(
          validOptions.find((option) => option.length !== 0)
        ),
        validOptions.find((option) => option.length !== 0)[0]
      );
    }
    //

    //SWITCH TURNS
    player1 = !player1;

    player2 = !player2;
    //
  }
}
console.log(towerBreakers(1, 4));
