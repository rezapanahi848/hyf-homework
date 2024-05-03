//Flight booking fullname function

function getFullname(firstname, surname, sex, useFormalName = false) {
  let prefix = "";

  if (useFormalName) {
    if (sex === "male") prefix = "Mr";
    else if (sex === "female") prefix = "Mrs";
    else console.log("Please enter a valid gender");
  }

  return `${prefix} ${firstname} ${surname}`;
}
fullname1 = getFullname("Benjamin", "Hughes", "male");
fullname2 = getFullname("Beatrice", "Jackson", "female", true);

console.log(fullname1);
console.log(fullname2);

//Event application

function getEventWeekday(eventInDays) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  const eventDayIndex = (today + eventInDays) % 7;

  return weekdays[eventDayIndex];
}

console.log(getEventWeekday(3));

//Weather wear

function outfitBasedOnWeather(temp) {
  if (temp >= 35) {
    return "shorts and a t-shirt";
  } else if (temp >= 30) {
    return "a summer dress ";
  } else if (temp >= 25) {
    return "trousers and  shirt";
  } else if (temp >= 20) {
    return " light jacket and a  t-shirt";
  } else if (temp >= 15) {
    return "Sweater and  pair of jeans";
  } else if (temp >= 10) {
    return "Warm pants or jeans";
  } else {
    return "Heavy winter coat";
  }
}

//Student manager

const suggestedOutfit = outfitBasedOnWeather(5);
console.log(suggestedOutfit);

const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName.trim() === "") {
    console.log("Cannot add an empty string to the class.");
    return;
  }

  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07.");
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class.`);
    return;
  }

  class07Students.push(studentName);

  if (studentName === "Queen") {
    console.log("Long live the Queen! She has been added to the class.");
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}


addStudentToClass("Benjamin");
addStudentToClass("Reza");
addStudentToClass("Milad");
addStudentToClass("zara");
addStudentToClass("Queen");

addStudentToClass("");

console.log(getNumberOfStudents());



let boughtCandyPrices = [];

function addCandy(candyType, weight) {
    const candyPrices = {
        "sweet": 0.5,
        "chocolate": 0.7,
        "toffee": 1.1,
        "chewing-gum": 0.03
    };

    const pricePerGram = candyPrices[candyType];
    if (pricePerGram) {
        const totalPrice = pricePerGram * weight;
        boughtCandyPrices.push(totalPrice);
    } else {
        console.log("Invalid candy type");
    }
}

function canBuyMoreCandy() {
    const amountToSpend = Math.random() * 100;
    let totalSpent = 0;
    for (let price of boughtCandyPrices) {
        totalSpent += price;
    }
    if (totalSpent < amountToSpend) {
        console.log("You can buy more, so please do!");
        return true;
    } else {
        console.log("Enough candy for you!");
        return false;
    }
}

addCandy("sweet", 20);
addCandy("chocolate", 30);
addCandy("toffee", 10);
addCandy("chewing-gum", 50);

canBuyMoreCandy();