const surl = 'https://takaedza.github.io/wdd230/chamber/data/members.json'; // Declare once
const container = document.querySelector('#spotlight-container');
async function getSpotlightCompanies() {
  try {
    const response = await fetch(surl);
    const data = await response.json();
    
    // Check if data is fetched correctly
    console.log('Data fetched:', data);
    
    const eligible = data.companies.filter(company => 
      company.membershipLevel.includes('Gold') || 
      company.membershipLevel.includes('Silver')
    );
    
    console.log('Eligible companies:', eligible);
    
    const shuffled = [...eligible].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.random() > 0.5 ? 2 : 3); // Random 2 or 3
  } catch (error) {
    console.error('Error loading companies:', error);
    return [];
  }
}
function displaySpotlights(companies) {
  if (companies.length === 0) {
    container.innerHTML = '<p>No spotlight companies found.</p>';
    return;
  }
  
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
window.addEventListener('load', async () => {
  const spotlightCompanies = await getSpotlightCompanies();
  displaySpotlights(spotlightCompanies);
});