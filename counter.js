let count = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const display = function (count) {
  document.querySelector(".count").textContent = count;
};

document.querySelector('.increment').addEventListener('click', incrementCounter);
document.querySelector('.decrement').addEventListener('click', decrementCounter);
document.querySelector('.reset').addEventListener('click', resetCounter);

function incrementCounter() {
  if (count < 9) {
    count++;
    display(count);
    // displayMessage("");
  } else {
    // displayMessage("Exceed !");
    // display("");
    document.querySelector(".message").textContent="Exeed";
  }
}

function decrementCounter() {
  if (count > 0) {
    count--;
    display(count);
    displayMessage("");
  } else {
    displayMessage("Warning!");
    display("");
  }
}

function resetCounter() {
  count = 0;
  display(count);
  displayMessage("");     
}