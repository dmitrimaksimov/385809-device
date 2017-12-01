var openMap = document.querySelector(".open-map-big");
var modalMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".close-map");

var openWriteUs = document.querySelector(".open-write-us");
var modalWriteUs = document.querySelector(".modal-write-us");
var closeWriteUs = document.querySelector(".close-write-us");

var formWriteUs = modalWriteUs.querySelector("form");
var userWriteUs = modalWriteUs.querySelector("[name=user-name]");
var emailWriteUs = modalWriteUs.querySelector("[name=user-email]");
var letterWriteUs = modalWriteUs.querySelector("[name=user-letter]");

var storageName = localStorage.getItem("userName");
var storageEmail = localStorage.getItem("userEmail");

openMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (modalMap.classList.contains("modal-show")) {
			modalMap.classList.remove("modal-show");
		}
		if (modalWriteUs.classList.contains("modal-show")) {
			modalWriteUs.classList.remove("modal-show");
		}
	}
});

openWriteUs.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalWriteUs.classList.add("modal-show");
	
	if (storageName) {
		userWriteUs.value = storageName;
		emailWriteUs.focus();
	} else {
		userWriteUs.focus();
	}
	if (storageName && storageEmail) {
		emailWriteUs.value = storageEmail;
		letterWriteUs.focus();
	}
});

closeWriteUs.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalWriteUs.classList.remove("modal-show");
});

formWriteUs.addEventListener("submit", function(evt) {
	if (!userWriteUs.value) {
		evt.preventDefault();
		userWriteUs.classList.remove("modal-error");
		userWriteUs.offsetWidth = userWriteUs.offsetWidth;
		userWriteUs.classList.add("modal-error");
		userWriteUs.classList.add("write-us-invalid");
	} else {
		localStorage.setItem("userName", userWriteUs.value);
	}	
	if (!emailWriteUs.value) {
		evt.preventDefault();
		emailWriteUs.classList.remove("modal-error");
		emailWriteUs.offsetWidth = userWriteUs.offsetWidth;
		emailWriteUs.classList.add("modal-error");
		emailWriteUs.classList.add("write-us-invalid");
	} else {
		localStorage.setItem("userEmail", emailWriteUs.value);
	}
});

userWriteUs.addEventListener("focus", function() {
	userWriteUs.classList.remove("write-us-invalid");
});

emailWriteUs.addEventListener("focus", function() {
	emailWriteUs.classList.remove("write-us-invalid");
});