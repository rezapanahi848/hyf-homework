// Initialize an empty object to store user data
const userData = {};

function getReply(command) {
  const words = command.split(" ");
  const action = words[0].toLowerCase();

  if (action === "hello") {
    // Save the name and respond with a greeting
    const name = words.slice(4).join(" ");
    userData.name = name;
    return `Nice to meet you, ${name}!`;
  } else if (
    action === "what" &&
    words[1] === "is" &&
    words[2] === "my" &&
    words[3] === "name?"
  ) {
    // Respond with the saved name or a prompt
    return userData.name
      ? `Your name is ${userData.name}.`
      : "I don't know your name yet.";
  } else if (
    action === "add" &&
    words[1] === "to" &&
    words[2] === "my" &&
    words[3] === "todo"
  ) {
    // Add the task to the todo list
    const task = words.slice(4).join(" ");
    userData.todo = userData.todo || [];
    userData.todo.push(task);
    return `${task} added to your todo.`;
  } else if (
    action === "remove" &&
    words[1] === "from" &&
    words[2] === "my" &&
    words[3] === "todo"
  ) {
    // Remove the task from the todo list
    const taskToRemove = words.slice(4).join(" ");
    if (userData.todo && userData.todo.includes(taskToRemove)) {
      userData.todo = userData.todo.filter((task) => task !== taskToRemove);
      return `Removed ${taskToRemove} from your todo.`;
    } else {
      return `Task "${taskToRemove}" not found in your todo.`;
    }
  } else if (
    action === "what" &&
    words[1] === "is" &&
    words[2] === "on" &&
    words[3] === "my" &&
    words[4] === "todo?"
  ) {
    // Respond with the todo list
    if (userData.todo && userData.todo.length > 0) {
      const todoList = userData.todo.join(" and ");
      return `You have ${userData.todo.length} todos: ${todoList}.`;
    } else {
      return "Your todo list is empty.";
    }
  } else if (action === "timer" && words[1] === "set" && words[2] === "for") {
    const minutes = parseInt(words[3]);
    if (!isNaN(minutes)) {
      setTimeout(() => {
        console.log("Timer done");
      }, minutes * 60 * 1000);
      return `Timer set for ${minutes} minutes.`;
    }
  } else if (
    action === "what" &&
    words[1] === "day" &&
    words[2] === "is" &&
    words[3] === "it" &&
    words[4] === "today?"
  ) {
    // Get the current date
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    return `Today is ${formattedDate}.`;
  } else if (action === "math" && words[1] === "is") {
    try {
      const result = eval(words.slice(2).join(" "));
      return `The result is ${result}.`;
    } catch (error) {
      return "Invalid math expression.";
    }
  } else {
    return "I'm sorry, I don't understand that command.";
  }
}

// Example usage:
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you Benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
