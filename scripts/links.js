const baseURL = "https://takaedza.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    displayLinks(data.weeks); // Pass the weeks array
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function displayLinks(weeks) {
  const linksList = document.getElementById('linksList');
  weeks.forEach(week => {
    const li = document.createElement('li');
    li.textContent = `${week.week}: `;
    week.links.forEach((link, index) => {
      const a = document.createElement('a');
      a.href = baseURL + link.url;
      a.textContent = link.title;
      li.appendChild(a);
      if (index < week.links.length - 1) {
        li.appendChild(document.createTextNode(' | '));
      }
    });
      linksList.appendChild(li);
        });
}

// Initialize
getLinks();