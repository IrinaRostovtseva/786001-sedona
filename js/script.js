var modalControl = document.querySelector(".modal-operator");
var popup = document.querySelector(".modal");
var arriveDate = popup.querySelector("[name=arrival-date]");
      
modalControl.addEventListener("click", function(){
    popup.classList.toggle("modal-open");
    arriveDate.focus();
});