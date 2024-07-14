document.addEventListener("DOMContentLoaded", function () {
  fetch('templates/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  fetch('templates/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
});