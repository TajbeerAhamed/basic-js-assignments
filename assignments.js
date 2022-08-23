// problem : 1 radian to degree

function radianToDegree(radian) {
    const pi = Math.PI;
    const piValue = (180 / pi);
    const radians = radian * piValue;
    const fixedDegree = radians.toFixed(2);
    if (typeof radian !== 'number') {
        return 'please enter a valid number';
    }
    return fixedDegree;
}
// const radianDegree = radianToDegree();
// console.log(radianDegree);


//  problem : 2 is javascript file 

function isJavaScriptFile(fileName) {

    if (typeof fileName !== 'string') {
        return 'please enter a valid string';
    }
    const isFile = fileName.endsWith('.js');
    return isFile;
}

// console.log(isJavaScriptFile('img.jpg.js'));


// problem :3 start oil Prices

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    const totalDiesel = dieselPrice * dieselQuantity;
    const totalPetrol = petrolPrice * petrolQuantity;
    const totalOctane = octanePrice * octaneQuantity;
    const totalCost = totalDiesel + totalPetrol + totalOctane;
    if (typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number') {
        return 'please enter a valid number';
    }
    return totalCost;
}
// const oilPrices = oilPrice(30, 20, 10);
// console.log(oilPrices);


// problem : 4 start 
function publicBusFare(numberOfPeople) {
    const peopleOutsideBus = numberOfPeople % 50;
    const peopleOutsideMicro = peopleOutsideBus % 11;
    const publicBusFare = peopleOutsideMicro * 250;
    if (typeof numberOfPeople !== 'number') {
        return 'please enter a valid number';
    }
    return publicBusFare;

}
// console.log(publicBusFare());


// problem :5 
// let p1 = { name: 'doe', friend: 'alex' };
// let p2 = { name: 'john', friend: 'doe' };
function isBestFriend(person1, person2) {

    if (person1.name === person2.friend && person2.name === person1.friend) {
        return true;

    }
    if (typeof person1 !== 'object' || typeof person2 !== 'object') {
        return 'please enter a valid object';
    }
    else {
        return false;
    }
}
// console.log(isBestFriend(p1, p2));
