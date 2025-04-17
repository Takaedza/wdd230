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