document
  .getElementById("openModalButton")
  .addEventListener("click", function () {
    var modalContent = document.querySelector(".content");
    var modalIcon = document.querySelector(".icon");

    modalContent.style.display = "block";
    modalIcon.style.display = "block";
  });

document
  .getElementById("closeModalButton")
  .addEventListener("click", function () {
    var modalContent = document.querySelector(".content");
    var modalIcon = document.querySelector(".icon");

    modalContent.style.display = "none";
    modalIcon.style.display = "none";
  });
