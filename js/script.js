document.documentElement
        .classList.replace('no-js', 'js');
var modalControl = document.querySelector(".modal-operator");
var popup = document.querySelector(".modal");
var arriveDate = popup.querySelector("[name=arrival-date]");
var departureDate = popup.querySelector("[name=departure-date]");
var adult = popup.querySelector("[name=adult-amount]");
var children = popup.querySelector("[name=children-amount]");
var form = document.querySelector("form");
      
modalControl.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-open");
  form.classList.remove("error-message");
  arriveDate.focus();
});
form.addEventListener("submit", function (evt) {
  if (!arriveDate.value || !departureDate.value || !adult.value || !children.value) {
    evt.preventDefault();
    form.classList.remove("error-message");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("error-message");
  }
});