document.addEventListener('DOMContentLoaded', function() {
  loadHeaderFooter();
});

function loadHeaderFooter() {
  // Determine the base path depending on the depth of the page in the directory hierarchy
  const basePath = location.pathname.includes('/anet/') || location.pathname.includes('/cybs/') || location.pathname.includes('/maps/') ? '..' : '.';

  fetch(`${basePath}/templates/header.html`)
    .then(response => response.text())
    .then(data => {
      document.querySelector('header').innerHTML = data;
      adjustPaths('header', basePath);
    })
    .catch(error => console.error('Error loading header:', error));

  fetch(`${basePath}/templates/footer.html`)
    .then(response => response.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data;
      adjustPaths('footer', basePath);
    })
    .catch(error => console.error('Error loading footer:', error));
}

function adjustPaths(elementId, basePath) {
  const element = document.getElementById(elementId);

  if (element) {
    // Adjust the paths for links
    const links = element.querySelectorAll('a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        link.setAttribute('href', `${basePath}/${href}`);
      }
    });

    // Adjust the paths for images
    const images = element.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http')) {
        img.setAttribute('src', `${basePath}/${src}`);
      }
    });
  }
}