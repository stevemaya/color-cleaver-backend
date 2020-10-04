/******************
 * YOUR CODE HERE *
 ******************/

function colorCombinator(primary1, primary2) {
  if (primary1 === 'red' && primary2 === 'yellow' || primary1 === 'yellow' && primary2 === 'red') {
    return 'orange';
  } else if (primary1 === 'red' && primary2 === 'blue' || primary1 === 'blue' && primary2 === 'red'){
    return 'purple';
  } else if (primary1 === 'yellow' && primary2 === 'blue' || primary1 === 'blue' && primary2 === 'yellow') {
    return 'green';
    
  }
    
}



// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
