//  открытие модальных окон
var modalWriteUs = document.getElementById("modal-write-us-id");
var openWriteUs = document.getElementById("modal-write-us-open");
var closeWriteUs = document.getElementsByClassName("modal-close")[0];

var modalMap = document.getElementById("modal-map-id");
var openMap = document.getElementById("modal-map-open");
var closeMap = document.getElementsByClassName("modal-close")[1];

openWriteUs.onclick = function() {
	event.preventDefault();
	modalWriteUs.style.display = "block";
}

closeWriteUs.onclick = function() {
	modalWriteUs.style.display = "none";
}

window.onclick = function() {
	if(event.target == modalWriteUs) {
		modalWriteUs.style.display = "none";
	}
}

openMap.onclick = function handlerMap() {
	event.preventDefault();
	modalMap.style.display = "block";
}

closeMap.onclick = function() {
	modalMap.style.display = "none";
}

window.onclick = function() {
	if(event.target == modalWriteUs) {
		modalMap.style.display = "none";
	}
}