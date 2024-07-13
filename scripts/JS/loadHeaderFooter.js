document.addEventListener('DOMContentLoaded', function() {
  loadHeaderFooter();
});

function loadHeaderFooter() {
  // Determine the relative path to the templates directory
  const path = window.location.pathname.split('/').slice(0, -1).join('/') + '/templates/';
  
  fetch(path + 'header.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

  fetch(path + 'footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
}