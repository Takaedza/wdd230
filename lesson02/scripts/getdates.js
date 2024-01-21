// copy right year
document.querySelector('#year').textContent = new Date().getFullYear();

// last modified year and time
document.getElementById('lastModified').innerHTML =new Date(document.lastModified);