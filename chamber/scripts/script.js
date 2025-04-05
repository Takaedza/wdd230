// Dark Mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("😎")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🌞";
    } else {
        main.style.background = "white";
        main.style.color = "#000";
        modeButton.textContent = "😎";
    }
});

//Hamburger for navigation
document.querySelectorAll(".direction a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        hamButton.textContent = "☰";
    });
});

// Calender 
const monthYear = document.getElementById('monthYear');
const datesContainer = document.getElementById('dates');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentDate = new Date();
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    // Set the month and year in the header
    monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
    // Clear previous dates
    datesContainer.innerHTML = '';
    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    // Fill the calendar with empty divs for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        datesContainer.appendChild(emptyDiv);
    }
    // Fill the calendar with the actual dates
    for (let day = 1; day <= lastDate; day++) {
        const dateDiv = document.createElement('div');
        dateDiv.textContent = day;
        dateDiv.classList.add('date');
        datesContainer.appendChild(dateDiv);
    }
}
// Event listeners for navigation buttons
prevButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});
nextButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});
// Initial render
renderCalendar();

// Visit Message Functionality
const visitMessageElement = document.getElementById('visitMessage');
const lastVisit = localStorage.getItem('lastVisit');
const currentDateObj = new Date();
function calculateDaysDifference(lastVisitDate) {
    const lastVisitDateObj = new Date(lastVisitDate);
    const timeDifference = currentDateObj - lastVisitDateObj; // Difference in milliseconds
    return Math.floor(timeDifference / (1000 * 3600 * 24)); // Convert to days
}
function displayVisitMessage() {
    if (!lastVisit) {
        visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysDifference = calculateDaysDifference(lastVisit);
        
        if (daysDifference < 1) {
            visitMessageElement.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysDifference === 1 ? "day" : "days";
            visitMessageElement.textContent = `You last visited ${daysDifference} ${dayText} ago.`;
        }
    }
    // Store the current visit date in localStorage
    localStorage.setItem('lastVisit', currentDateObj.toISOString());
}
// Call the function to display the message
displayVisitMessage();