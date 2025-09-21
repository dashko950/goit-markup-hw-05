<script>
  // Знаходимо елементи
  const modal = document.getElementById('modal');
  const openModalBtn = document.querySelector('.open-modal-btn');
  const closeModalBtn = document.querySelector('.modal-close');

  // Відкриття модалки
  openModalBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
  });

  // Закриття модалки по кнопці
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });

  // Закриття модалки по кліку на бекдроп
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('is-open');
    }
  });

  // Закриття модалки по Esc
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      modal.classList.remove('is-open');
    }
  });
</script>
