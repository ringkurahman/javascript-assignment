// First Number Problem Solving feetToMile
function feetToMile(feet) {
  var mile = feet / 5280;
  return mile;
}

var dadiFeet = feetToMile(50000);
console.log('Total Mile: ', dadiFeet);

// Number Two Problem Solving woodCalculator
function woodCalculator(chair, table, bed) {
  var chairWood = chair * 1;
  var tableWood = table * 3;
  var bedWood = bed * 5;
  var totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

var customerOrder = woodCalculator(5, 3, 3);
console.log('Your Total Wood: ', customerOrder, 'Cubic Meter');

// Number three Problem Solving brickCalculator
function brickCalculator(floor) {
  var brick = 1000;
  if (floor <= 10) {
    floor = 15 * brick * floor;
  } else if (floor > 10 && floor <= 20) {
    floor = 12 * brick * floor;
  } else if (floor > 20) {
    floor = 10 * brick * floor;
  }
  return floor;
}

var totalBrick = brickCalculator(17);
console.log('Your Total Brick: ', totalBrick);

// Number Four Problem Solving tinyFriend
function tinyFriend(n) {
  var min = n[0];
  for (var i = 0; i < n.length; i++) {
    var element = n[i];
    if (element < min) {
      min = element;
    }
  }
  return min;
}

var friendsName = ['Belal Hosen', 'Asad', 'Sohel chowdhury', 'Taposh'];
var outPut = tinyFriend(friendsName);

console.log(outPut);
