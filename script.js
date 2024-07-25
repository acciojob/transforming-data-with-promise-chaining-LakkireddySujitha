//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function() {
  const input = document.getElementById("ip").value;
  const output = document.getElementById("output");
  
  // Convert input to a number
  const number = parseFloat(input);
  
  // Function to create a promise that resolves after a delay
  function delayedResolve(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), delay);
    });
  }

  // Start the promise chain
  delayedResolve(number, 2000)
    .then(result => {
      output.textContent = `Result: ${result}`;
      return delayedResolve(result * 2, 1000);
    })
    .then(result => {
      output.textContent = `Result: ${result}`;
      return delayedResolve(result - 3, 1000);
    })
    .then(result => {
      output.textContent = `Result: ${result}`;
      return delayedResolve(result / 2, 1000);
    })
    .then(result => {
      output.textContent = `Result: ${result}`;
      return delayedResolve(result + 10, 1000);
    })
    .then(result => {
      output.textContent = `Final Result: ${result}`;
    })
    .catch(error => {
      output.textContent = `Error: ${error}`;
    });
});
