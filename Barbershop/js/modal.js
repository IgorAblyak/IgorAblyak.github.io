var login = document.querySelector(".login");
var popup = document.querySelector(".modal-login");
var loginFocus = popup.querySelector("[name=login]");
var popupMap = document.querySelectorAll(".main-content-left a")[1];
var map = document.querySelector(".modal-map");
var overlay = document.querySelector(".modal-overlay");
var modalСloseLogin = popup.querySelector(".modal-close");
var modalCloseMap = map.querySelector(".modal-close");

login.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("modal-show");
  loginFocus.focus();
  overlay.classList.add("modal-show");
});

modalСloseLogin.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.toggle("modal-show");
  overlay.classList.toggle("modal-show");
});

popupMap.addEventListener("click", function(event){
  event.preventDefault();
  map.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

modalCloseMap.addEventListener("click", function(event){
  event.preventDefault();
  map.classList.toggle("modal-show");
  overlay.classList.toggle("modal-show");
});