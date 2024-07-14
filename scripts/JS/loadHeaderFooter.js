document.addEventListener('DOMContentLoaded', function () {
  loadHeaderFooter();
});

function loadHeaderFooter() {
  // Determine the base path to the templates directory
  const basePath = getBasePath();

  fetch(basePath + 'templates/header.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('header').innerHTML = data;
      adjustPaths('header', basePath);
    })
    .catch(error => console.error('Error loading header:', error));

  fetch(basePath + 'templates/footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data;
      adjustPaths('footer', basePath);
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

function adjustPaths(elementId, basePath) {
  const element = document.getElementById(elementId);

  if (element) {
    // Adjust the paths for links
    const links = element.querySelectorAll('a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        link.setAttribute('href', basePath + href);
      }
    });

    // Adjust the paths for images
    const images = element.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http')) {
        img.setAttribute('src', basePath + src);
      }
    });
  }
}
