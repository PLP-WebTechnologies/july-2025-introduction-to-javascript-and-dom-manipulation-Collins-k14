// ================================
// PART 1: Variables and Conditionals
// ================================

// Variable Declarations
let name = "Collins";
let age = 20;
const favoriteColor = "Blue";

// Conditional check
if (age < 18) {
  console.log(`${name}, you're a teenager!`);
} else {
  console.log(`${name}, you're an adult!`);
}

// Output variables to console
console.log(`Name: ${name}, Age: ${age}, Favorite Color: ${favoriteColor}`);


// ================================
// PART 2: Functions
// ================================

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Function 2: Format a full name
function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`.toUpperCase();
}

// Demonstration
console.log("Total price:", calculateTotal(100, 0.15));
console.log("Formatted Name:", formatName("Collins", "Karani"));


// ================================
// PART 3: Loops
// ================================

// Loop Example 1: Print numbers 1-5
for (let i = 1; i <= 5; i++) {
  console.log(`Number: ${i}`);
}

// Loop Example 2: Iterate through an array of fruits
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});


// ================================
// PART 4: DOM Interactions
// ================================

// DOM Interaction 1: Change heading text
document.getElementById("change-text-btn").addEventListener("click", () => {
  document.getElementById("main-heading").textContent = "You Clicked the Button!";
});

// DOM Interaction 2: Add a new item to a list
document.getElementById("add-item-btn").addEventListener("click", () => {
  const input = document.getElementById("list-item-input");
  const newItem = document.createElement("li");
  newItem.textContent = input.value || "Unnamed Item";
  document.getElementById("dynamic-list").appendChild(newItem);
  input.value = "";
});

// DOM Interaction 3: Toggle background highlight
document.getElementById("highlight-toggle").addEventListener("change", (event) => {
  if (event.target.checked) {
    document.body.classList.add("highlight");
  } else {
    document.body.classList.remove("highlight");
  }
});

