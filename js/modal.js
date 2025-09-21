const modalOpenBtn = document.querySelector("[data-modal-open]");
const modalCloseBtn = document.querySelector(".close-button");
const modalContainer = document.querySelector(".modal-container");

modalOpenBtn.addEventListener("click", () => {
  modalContainer.classList.add("active");
});

modalCloseBtn.addEventListener("click", () => {
  modalContainer.classList.remove("active");
});

modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.classList.remove("active");
  }
});
