/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary(secondary){
  if (secondary === 'orange' || secondary === 'purple' || secondary === 'green'){
    return true;
    }  
    else {
      return false;
    }
}


// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
