// Typing speed test functionality

// Get the paragraph element where the user will type
const textElement = document.getElementById('text-to-type');

// Get the result display area
const resultElement = document.getElementById('result');

// Get the start button
const startButton = document.getElementById('start-button');

// Variable to store the start time
let startTime;

// Function to start the test
function startTest() {
    // Hide the start button
    startButton.style.display = 'none';

    // Show the text element
    textElement.style.display = 'block';

    // Reset result display
    resultElement.innerText = '';

    // Focus on the text element
    textElement.focus();

    // Record the start time
    startTime = Date.now();
}

// Function to calculate typing speed
function calculateSpeed() {
    // Calculate elapsed time
    const endTime = Date.now();
    const elapsedTimeInSeconds = (endTime - startTime) / 1000;

    // Get the text typed by the user
    const typedText = textElement.value;

    // Count the number of words typed (assuming words are separated by spaces)
    const typedWords = typedText.trim().split(/\s+/).length;

    // Calculate typing speed (words per minute)
    const wordsPerMinute = Math.round((typedWords / elapsedTimeInSeconds) * 60);

    // Display the result
    resultElement.innerText = `Your typing speed: ${wordsPerMinute} words per minute`;
}

// Event listener for the start button
startButton.addEventListener('click', startTest);

// Event listener for the text element to calculate speed when the user finishes typing
textElement.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) { // Enter key
        calculateSpeed();
    }
});
