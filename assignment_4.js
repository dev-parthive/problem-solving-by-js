// 1. radianToDegree problem  start 


function radianToDegree(radian) {
  //number  validtion  check 
  if (typeof radian !== "number") {
    return "Please enter a number value";
  }
  // main calculation 
  else {
    const degree = radian * (180 / Math.PI);
    const degreeToFixed = degree.toFixed(2);
    return parseFloat(degreeToFixed);
  }
}

// 1. radianToDegree problem  end 


// 2.  isJavaScriptFile  problem start 

function isJavaScriptFile(fileName) {
  //string validation check 
  if (typeof fileName !== 'string') {
    return 'Plase enter a string '
  }
  //check the fileName
  else if (fileName.endsWith('.js') === true) {
    return true;
  } else {
    return false;
  }
}
// 2.  isJavaScriptFile  problem end  


// 3. oilPrice problem  start 

//fuel price declaretion 
const dieselPrices = 114;
const petrolPrice = 130;
const octanePrice = 135;
//oilPrice fucntion 
function oilPrice(dieselQuantity, petrolQuantity, ocatneQuantity) {
  // number validation check 
  if (typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof ocatneQuantity !== 'number') {
    return 'Only number value can be acceptable';
  } else {
    // individual fuel cost 
    const dieselTotalCost = dieselPrices * dieselQuantity;
    const petrolTotalCost = petrolPrice * petrolQuantity;
    const octaneTotalCost = octanePrice * ocatneQuantity;
    //Total fuel cost
    const TotalCost = dieselTotalCost + petrolTotalCost + octaneTotalCost;
    return TotalCost;
  }

}
// 3. oilPrice problem  end 


// 4. publicBusFare problem start
const busCapacity = 50;
const microbusCapacity = 11;
const publiceTransprotFare = 250;

function publicBusFare(amountOfPeople) {
  //string validation check
  if (typeof amountOfPeople !== 'number') {
    return 'Your given  value must be number ';
  }
  // Here is the main calculation
  else {
    const restPeopleForMicro = amountOfPeople % 50;
    const restPeopleForPublicBus = restPeopleForMicro % 11;
    const totalCostForPublicBus = restPeopleForPublicBus * publiceTransprotFare;
    return totalCostForPublicBus;
  }
}

// 4. publicBusFare problem end 


// 5.isBestFriend problem start 
const firstFriend = { name: 'abul', friend: 'babul' };
const secondFriend = { name: 'babul', friend: 'abul' };
function isBestFriend(firstFriend, secondFriend) {
  if (typeof firstFriend.name !== 'string' || typeof firstFriend.friend !== "string" || typeof secondFriend.name !== 'string' || typeof secondFriend.friend !== 'string') {
    return "YOur given value must be string ";
  } else if (firstFriend.name === secondFriend.friend && firstFriend.friend === secondFriend.name) {
    return true;
  } else {
    return false;
  }

}
// 5.isBestFriend problem end 