const shuffleValues = document.querySelector(".btn-shuffle");

shuffleValues.addEventListener("click", () => {
  // selecting all checkboxes

  let array = [];
  let checkboxes = document.getElementsByName("shuffle[]");

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i]) {
      array.push(checkboxes[i].value);
    }
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const shuffledValues = shuffleArray(array);
  const labels = document.getElementsByTagName("label");

  // Update the labels with shuffled values
  Array.from(labels).forEach(function (label, index) {
    label.textContent = shuffledValues[index];
  });
});

const changeButton = document.querySelector(".btn-change");
const newValues = ["Job", "Html&Css", "React", "JavaScript"];
let index = 0;

// Function to change the property values
// Attach event listener to the "Change Values" button
changeButton.addEventListener("click", () => {
  const labels = document.getElementsByTagName("label");

  // Loop through each label and update the text
  Array.from(labels).forEach(function (label, index) {
    label.textContent = newValues[index];
  });

  // Reset the index if it exceeds the number of new values
  if (index >= newValues.length) {
    index = 0;
  }
});

// Show Selected Values
const showButton = document.querySelector(".btn-select");
const checkboxes = document.querySelectorAll('#myForm input[type="checkbox"]');
const labelboxes = document.querySelectorAll(".label");

// Function to hide the checkboxes that are not selected
// Attach event listener to the "Show Selected Values" button
showButton.addEventListener("click", () => {
  checkboxes.forEach(function (checkbox, index) {
    if (!checkbox.checked) {
      checkbox.classList.add("hidden");
      labelboxes[index].classList.add("hidden");
    }
  });
});
