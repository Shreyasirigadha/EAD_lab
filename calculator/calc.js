// Function to append values to the display
function appendValue(value) {
    const display = document.getElementById("result");
    display.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById("result").value = "";
  }
  
  // Function to delete the last digit
  function deleteDigit() {
    const display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
  }
  
  // Function to calculate the result
  function calculateResult() {
    const display = document.getElementById("result");
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
  