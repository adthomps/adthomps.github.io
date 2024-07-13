document.addEventListener('DOMContentLoaded', function() {
  loadHeaderFooter();
});

function loadHeaderFooter() {
  fetch('templates/header.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('header').innerHTML = data;
    });

  fetch('templates/footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data;
    });
}
