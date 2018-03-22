var navItem = document.querySelectorAll(".nav-image-item");
navItem[1].style.background="url(images/services.jpg) center/cover no-repeat";
navItem[2].style.background="url(images/order.jpg) center/cover no-repeat";
navItem[3].style.background="url(images/contacts.jpg) center/cover no-repeat";

for ( var i = 0; i < navItem.length; i++) {
navItem[i].addEventListener("mouseenter", function(event) {
  var box = event.target.firstElementChild;
  box.classList.add("visible");
  var h2 = box.firstElementChild;
  h2.classList.add("move-h");
  var p = box.children[1];
  p.classList.add("move-p");
  var b = event.target.children[1];
  b.classList.add("move-h2");
});
navItem[i].addEventListener("mouseleave", function(event) {
  var box = event.target.firstElementChild;
  box.classList.remove("visible");
  var h2 = box.firstElementChild;
  h2.classList.remove("move-h");
  var p = box.children[1];
  p.classList.remove("move-p");
  var b = event.target.children[1];
  b.classList.remove("move-h2");
});
}