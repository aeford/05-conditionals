// Get the form and suggestion section from the page
const weatherForm = document.getElementById('weatherForm');
const suggestionSection = document.getElementById('suggestion');

// Listen for the form submission
weatherForm.addEventListener('submit', function(event) {
  // Stop the form from refreshing the page
  event.preventDefault();

  // Get the selected weather value
  const weather = document.getElementById('weather').value;
  // Get the temperature value from the input (as a number)
  const temperature = Number(document.getElementById('temperature').value);

  // Create a variable for the message
  let message = '';

  // Check if weather is cloudy or rainy
  if (weather === 'cloudy' || weather === 'rainy') {
    // Suggest a light jacket for cloudy or rainy weather
    message = `It's ${weather}! ☁️🌧️ A light jacket might be a good idea.`;
  } else if (weather === 'sunny') {
    // Suggestion for sunny weather
    message = `It's sunny! 😎 Don't forget your sunglasses and sunscreen.`;
  } else if (weather === 'snowy') {
    // Suggestion for snowy weather
    message = `It's snowy! ❄️ Wear a warm coat, gloves, and boots.`;
  } else if (weather === 'windy') {
    // Suggestion for windy weather
    message = `It's windy! 💨 Hold onto your hat and wear a windbreaker.`;
  } else {
    // If no weather is selected
    message = `Please select the weather.`;
  }

  // Check if the temperature is below 50°F
  if (temperature && temperature < 50) {
    // Add a suggestion for a warm jacket
    message += ` It's cold! 🧥 Wear a warm jacket.`;
  }

  // Show the message in the suggestion section
  suggestionSection.innerHTML = `<p>${message}</p>`;
});
