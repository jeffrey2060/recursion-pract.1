/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/


function iceCreamShop(flavors, favorite) {
  // base case: if array is empty, return false
  if (flavors.length === 0) {
    return false;
  }
  // check if 1st flavor is fav
  if (flavors[0] === favorite) {
    return true;
  }
  // recursive check rest of array
  return iceCreamShop(flavors.slice(1), favorite);
}

const flavors = ['vanilla', 'chocolate', 'strawberry', 'mint'];
console.log(iceCreamShop(flavors, 'mint')); 
console.log(iceCreamShop(flavors, 'pecan'));


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
