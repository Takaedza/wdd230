const url = 'https://takaedza.github.io/wdd230/data/members.json'; // URL to fetch the data from

async function getMemberData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    displayLinks(data.members); // Pass the weeks array
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function displayMembers(members) {
  const infors = document.getElementById('infors');
    members.forEach(member => {
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
        name.textContent = `${member.name}`; // Assuming the data has 'name' property
        address.textContent = `Address: ${member.address}`; // Assuming the data has 'address' property
        phoneNumber.textContent = `Phone Number: ${member.phoneNumber}`; // Assuming the data has 'phoneNumber' property
        website.textContent = `Website: ${member.website}`; // Assuming the data has 'website' property
        level.textContent = `Level: ${member.membershipLevel}`; // Assuming the data has 'level' property
        sector.textContent = `Sector: ${member.sector}`; // Assuming the data has 'sector' property
        commencement.textContent = `Commencement: ${member.membershipStartDate}`; // Assuming the data has 'commencement' property

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Logo for ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '40');
        portrait.setAttribute('height', '140');

        // Append the section(infor) with the created elements.        
        infor.appendChild(portrait);
        infor.appendChild(name);
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
getMemberData();