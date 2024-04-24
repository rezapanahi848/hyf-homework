// Age-ify (A future age calculator)
const yearOfMyBirth = 1986;
const yearFuture = 2035;
const age = yearFuture - yearOfMyBirth;
console.log("My Firend will be " + age + " years old in " + yearFuture);
// Goodboy-Oldboy (A dog age calculator)
const dogyearOfbirth = 2020;
const dogyearFuture = 2028;
let dogage = dogyearFuture - dogyearOfbirth;
let typeofyaer = "human";
console.log ("My Firend's Dog will "   +   dogage + " years ");

//  result in dog years or human years
const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {dogage = 20
typeofyaer = "dog"}
console.log (shouldShowResultInDogYears);


// Housey pricey (A house price estimator)
// Peter home
const Peter = [
    
        houseWide = 8,
        houseDeep = 10,
        houseHigh = 10,
        gardenSizeInM2 =  100,
        housecost = 2500000,
]
let volumeInMetersPeter ;
volumeInMeterspeter = houseWide * houseDeep * houseHigh;
housePricePeter = volumeInMeterspeter * 2.5 * 1000 + gardenSizeInM2 * 300;
let AnalazPeter;
const Max = "too Much";
const min = "Too low";

if (housePricePeter > housecost)  AnalazPeter = Max 
    else AnalazPeter = min

console.log (AnalazPeter);


   // Julia home 
const Julia = [

        houseWide = 5,
        houseDeep = 11,
        houseHigh = 8,
        gardenSizeInM2 = 70,
        houseCost = 1000000
]
let volumeInMeters ;
volumeInMeters = houseWide * houseDeep * houseHigh;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let AnalazJulia;
if (housePrice > housecost)  AnalazJulia = Max 
else AnalazJulia = min;
console.log (AnalazJulia);

const ex = "Expensive";
const ch = "Cheap";
const eq = "equal"
let win;
 if (AnalazPeter = AnalazJulia)   win  = eq
 else win = ex;
console.log (" This person is Smarat " +  win);


//Ez Namey (Startup name generator) Optional
const firstWords  = [
    "Reza" ,
    "zehara",
    "Sara",
    "jiss",
    "jack",
    "Mobin",
    "Amir",
    "AmirReza",
    "Ali",
    "AliReza"
];

const secondWords = [
    "It",
    "Physic",
    "Chemistry",
    "Low",
    "Geology " ,
    "Geography" ,
    "Medical",
    "Teacher",
    "Driver",
    "Police"
]

firstWords  [Math.floor(Math.random() * 10)];

secondWords [Math.floor(Math.random() * 10)];

console.log(firstWords);
console.log(secondWords);
let startupName = firstWords + secondWords;
console.log (`The startup: ${startupName} contains ${startupName.length} characters`);