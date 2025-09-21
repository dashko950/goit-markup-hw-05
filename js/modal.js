const modalContainer = document.querySelector(".modal-container");
const closeButton = document.querySelector(".modal-close-button"); // кнопка хрестик

// Відкриття модалки
function openModal() {
  modalContainer.classList.add("active");
}

// Закриття модалки
function closeModal() {
  modalContainer.classList.remove("active");
}

closeButton.addEventListener("click", closeModal);

// Опціонально: закриття по кліку на фон
modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) closeModal();
});
