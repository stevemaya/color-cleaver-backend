/******************
 * YOUR CODE HERE *
 ******************/

function colorDeconstructor(secondary){
  if (secondary === 'orange') {
    return 'red and yellow';
  } else if (secondary === 'purple') {
    return 'red and blue';
  } else if (secondary === 'green') {
    return 'blue and yellow';
  }
}


// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
