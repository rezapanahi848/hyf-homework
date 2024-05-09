//Remove the item in names that is equal to nameToRemove

function removeName(names, nameToRemove) {
  return names.filter((name) => name !== nameToRemove);
}

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const nameToRemove = "Ahmad";
const filteredNames = removeName(names, nameToRemove);

console.log(filteredNames); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//calculateTravelTime
function calculateTravelTime(travelInformation) {
  const { speed, destinationDistance } = travelInformation;

  // Calculate total time in hours
  const totalTimeHours = destinationDistance / speed;

  // Convert total time to hours and minutes
  const hours = Math.floor(totalTimeHours);
  const minutes = Math.round((totalTimeHours - hours) * 60);

  // Format the result
  const formattedTime = `${hours} hours and ${minutes} minutes`;
  return formattedTime;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // Output: 8 hours and 38 minutes

//Series duration of my life
function logOutSeriesText() {
  const seriesDurations = [
    {
      title: "Game of Thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];

  let totalHours = 0;
  for (const series of seriesDurations) {
    totalHours += series.days * 24 + series.hours;
  }

  const totalHoursInLifespan = 80 * 365 * 24;
  const percentage = (totalHours / totalHoursInLifespan) * 100;

  console.log(
    `Game of Thrones took approximately ${percentage.toFixed(4)}% of your life.`
  );
  console.log(
    `Sopranos took approximately ${(percentage * 1.2).toFixed(
      4
    )}% of your life.`
  );
  console.log(
    `The Wire took approximately ${(percentage * 0.7).toFixed(
      4
    )}% of your life.`
  );
  console.log(
    `In total, that is approximately ${(percentage * 2.5).toFixed(
      4
    )}% of your life spent watching TV series.`
  );
}

logOutSeriesText();
////////////////////////////////////////////////////////////////////////////
class NoteManager {
  constructor() {
    this.notes = new Map(); // Use a Map for faster lookups
  }

  saveNote(content, id) {
    this.notes.set(id, content);
  }

  getNote(id) {
    return this.notes.get(id) || "Note not found!";
  }

  logOutNotesFormatted() {
    for (const [id, content] of this.notes) {
      console.log(`Note with id ${id}: "${content}"`);
    }
  }

  removeNote(id) {
    if (this.notes.has(id)) {
      this.notes.delete(id);
      return "Note removed successfully.";
    } else {
      return "Note not found!";
    }
  }
}

// Example usage:
const noteManager = new NoteManager();
noteManager.saveNote("Pick up groceries", 1);
noteManager.saveNote("Do laundry", 2);
noteManager.saveNote("Go Jogging", 3);

console.log(noteManager.getNote(2)); // Output: "Do laundry"
noteManager.logOutNotesFormatted();
noteManager.removeNote(1);
console.log(noteManager.getNote(1)); // Output: "Note not found!"
