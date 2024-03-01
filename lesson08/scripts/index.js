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
