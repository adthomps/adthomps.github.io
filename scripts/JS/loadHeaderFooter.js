document.addEventListener('DOMContentLoaded', function() {
  loadHeaderFooter();
});

function loadHeaderFooter() {
  // Determine the base path to the templates directory
  const basePath = getBasePath();

  fetch(basePath + 'templates/header.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

  fetch(basePath + 'templates/footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
}

function getBasePath() {
  // Get the current path
  const path = window.location.pathname;

  // Calculate the depth of the current file
  const depth = path.split('/').length - 2; // -2 to account for the leading slash and file name

  // Build the relative path to the root based on the depth
  let basePath = '';
  for (let i = 0; i < depth; i++) {
    basePath += '../';
  }
  return basePath;
}