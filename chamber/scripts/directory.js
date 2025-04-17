const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

// This script fetches member data from a JSON file and displays it on the webpage.
// It creates a section for each member with their details and an image.
const url = 'https://takaedza.github.io/wdd230/chamber/data/members.json'; // URL to fetch the data from
const infors = document.querySelector('#infors');
const container = document.querySelector('#spotlight-container'); // Assuming you have a div with class 'cards' in your HTML

// Fetch the data from the JSON file and display it
async function getCompanyData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    displayCompanies(data.companies);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function displayCompanies(companies) {
    companies.forEach(company => {
        // Create elements to add to the div.cards element
        let infor = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let website = document.createElement('p');
        let portrait = document.createElement('img');
        let level = document.createElement('p');
        let sector = document.createElement('p');
        let commencement = document.createElement('p');
        
        // Build the h2 content out to show the member's full name
        name.textContent = `${company.name}`; // Assuming the data has 'name' property
        address.textContent = `Address: ${company.address}`; // Assuming the data has 'address' property
        phoneNumber.textContent = `Phone Number: ${company.phoneNumber}`; // Assuming the data has 'phoneNumber' property
        website.textContent = `Website: ${company.website}`; // Assuming the data has 'website' property
        level.textContent = `Level: ${company.membershipLevel}`; // Assuming the data has 'level' property
        sector.textContent = `Sector: ${company.sector}`; // Assuming the data has 'sector' property
        commencement.textContent = `Commencement: ${company.membershipStartDate}`; // Assuming the data has 'commencement' property

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', company.imageurl);
        portrait.setAttribute('alt', `Logo for ${company.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '140');
        portrait.setAttribute('height', '140');

        // Append the section(infor) with the created elements.        
    
        infor.appendChild(name);
         infor.appendChild(portrait);
        infor.appendChild(address);
        infor.appendChild(phoneNumber);
        infor.appendChild(website);
        infor.appendChild(level);
        infor.appendChild(sector);
        infor.appendChild(commencement);
        infors.appendChild(infor);
    
    });
      
}

// Initialize
getCompanyData();

// Call the function to fetch and display on companies on advertising members
async function getSpotlightCompanies() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Filter Gold/Silver members
    const eligible = data.companies.filter(company => 
      company.membershipLevel.includes('Gold') || 
      company.membershipLevel.includes('Silver')
    );

    // Randomly select 2-3 members
    const shuffled = [...eligible].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.random() > 0.5 ? 2 : 3); // Random 2 or 3
  } catch (error) {
    console.error('Error loading companies:', error);
    return [];
  }
}

// Display spotlight ads
function displaySpotlights(companies) {
  container.innerHTML = companies.map(company => `
    <div class="spotlight-ad">
      <img src="${company.imageurl}" alt="${company.name}">
      <h3>${company.name}</h3>
      <p>${company.membershipLevel}</p>
      <p>📞 ${company.phoneNumber}</p>
      <a href="${company.website}" target="_blank">Website</a>
    </div>
  `).join('');
}

// Initialize on page load
window.addEventListener('load', async () => {
  const spotlightCompanies = await getSpotlightCompanies();
  displaySpotlights(spotlightCompanies);
});