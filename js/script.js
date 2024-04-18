const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  container.classList.toggle('overlay');
});

window.addEventListener('click', (e) => {
  if (sidebar.classList.contains('show') && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
    sidebar.classList.remove('show');
    container.classList.remove('overlay');
  }
});