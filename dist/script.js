document.querySelectorAll('[data-reader]').forEach(button => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.reader);
    if (dialog) { dialog.showModal(); dialog.scrollTop = 0; document.body.classList.add('reading'); }
  });
});
document.querySelectorAll('.reader').forEach(dialog => {
  dialog.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('reading'));
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
});
