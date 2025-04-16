const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
// Function to create a card for each prophet
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets); // Call displayProphets with the fetched data
}
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2'); // Create an h2 element for the full name
    let birthDate = document.createElement('p'); // Create a p element for the birth date
    let birthPlace = document.createElement('p'); // Create a p element for the birth place
    let portrait = document.createElement('img');
    
    // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; // Assuming the data has 'name' and 'lastname' properties
      birthDate.textContent = `Date of Birth: ${prophet.birthdate}`; // Assuming the data has 'birthdate' property
      birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`; // Assuming the data has 'birthplace' property  
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // Fill in the blanks
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');
    // Append the section(card) with the created elements
    card.appendChild(fullName); // Append the fullName element
    card.appendChild(birthDate); // Append the birthDate element
    card.appendChild(birthPlace); // Append the birthPlace element
    card.appendChild(portrait);
    cards.appendChild(card);
  }); // end of arrow function and forEach loop
}
getProphetData(); // Call the function to initiate data retrieval