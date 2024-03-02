//Password 
const kp1 = document.querySelector("#pwd");
const kp2 = document.querySelector("#pwd2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗PASSWORD DOES NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	}
    
    else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

//range selection
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}


//page visitor number
var counterContainer = document.querySelector(".page-visits");
var visitCount = localStorage.getItem("page_view");

if(visitCount > 0){
    visitCount = Number(visitCount);
    localStorage.setItem("page_view", visitCount);
}

else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}

counterContainer.innerHTML = visitCount
