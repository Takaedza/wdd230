// Page visit counter
function trackVisit() {
  const visits = localStorage.getItem('pageVisits') || 0;
  const newVisits = parseInt(visits) + 1;
  localStorage.setItem('pageVisits', newVisits);
  
  // Update the display
  const visitElement = document.getElementById('visitCount');
  if (visitElement) {
    visitElement.textContent = `Page Visits: ${newVisits}`;
  }
  
  // Optional: Keep the console log for debugging
  console.log(`You've visited this page ${newVisits} times`);
}

// Run the counter when page loads
trackVisit();

// copy right year
document.querySelector('#year').textContent = new Date().getFullYear();
document.getElementById('lastModified').innerHTML = new Date(document.lastModified);
