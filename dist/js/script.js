
window.addEventListener("DOMContentLoaded", () => {
	
	const tabContent = document.querySelectorAll(".tabcontent"),
	tabsParent = document.querySelector(".tabheader__items"),
	tabItem = document.querySelectorAll(".tabheader__item");

	function hideAllTabs(){
	tabContent.forEach(item => {
	item.style.display = "none";
	});

	tabItem.forEach(item => {
	item.classList.remove("tabheader__item_active");
	});
	}

	function showTabContent(i = 0){
	tabContent[i].style.display = "block";
	tabItem[i].classList.add("tabheader__item_active");
	}

	tabsParent.addEventListener("click", (event) => {
	let target = event.target;
	if(target && target.classList.contains("tabheader__item")){
	tabItem.forEach((item, index) => {
		if (target == item){
			hideAllTabs();
			showTabContent(index);
		}
	});
	}
	});

	hideAllTabs();
	showTabContent();
});