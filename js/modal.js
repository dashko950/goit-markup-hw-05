// Элементы модального окна
const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};

// Открытие модального окна
refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

// Закрытие по клику на бекдроп
refs.modal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    toggleModal();
  }
});

// Закрытие по ESC
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && !refs.modal.classList.contains("is-hidden")) {
    toggleModal();
  }
});

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
  document.body.classList.toggle("no-scroll");
}

// Обработка отправки форм
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
  });
});
