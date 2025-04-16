// Fetch member data from the JSON file
async function fetchMemberData() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    return members;
}
// Display members in the specified format
function displayMembers(members) {
    const memberContainer = document.getElementById('member-container');
    memberContainer.innerHTML = ''; // Clear previous content
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
            <p>${member.additionalInfo}</p>
        `;
        memberContainer.appendChild(memberCard);
    });
}
// Toggle between grid and list views
function toggleView(view) {
    const memberContainer = document.getElementById('member-container');
    memberContainer.className = view; // Set class to either 'grid-view' or 'list-view'
}
// Event listeners for view toggle buttons
document.getElementById('grid-view').addEventListener('click', () => {
    toggleView('grid-view');
});
document.getElementById('list-view').addEventListener('click', () => {
    toggleView('list-view');
});
// Initialize the directory page
async function init() {
    const members = await fetchMemberData();
    displayMembers(members);
}
// Run the initialization function
init();