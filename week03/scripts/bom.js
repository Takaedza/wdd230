// Select DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Function to retrieve chapters from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to save chapters to localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Initialize chapters array from localStorage or as empty array
let chaptersArray = getChapterList() || [];

// Display existing chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// ... rest of your existing code (event listeners, displayList, deleteChapter) ...
// Event listener for the button click
button.addEventListener('click', () => {
    if (input.value !== '') {  // Ensure the input is not empty
        const chapterValue = input.value; // Store the input value
        displayList(chapterValue); // Output the submitted chapter
        chaptersArray.push(chapterValue); // Add the chapter to the array
        setChapterList(); // Update localStorage with the new array
        input.value = ''; // Clear the input
        input.focus(); // Set focus back to the input
    }
});
// Function to display a chapter in the list
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    
    li.textContent = item; // Set the chapter text
    deleteButton.textContent = '❌'; // Set delete button text
    deleteButton.classList.add('delete'); // Add delete button class
    // Append delete button to the list item
    li.append(deleteButton);
    list.append(li);
    // Event listener for the delete button
    deleteButton.addEventListener('click', function () {
        list.removeChild(li); // Remove the list item
        deleteChapter(item); // Remove the chapter from the array and localStorage
        input.focus(); // Set focus back to the input
    });


}
// Function to delete a chapter from the array and localStorage
function deleteChapter(chapter) {
    // Remove the last character from the chapter (if needed)
    chapter = chapter.slice(0, chapter.length - 1); 
    chaptersArray = chaptersArray.filter(item => item !== chapter); // Filter out the chapter
    setChapterList(); // Update localStorage
}