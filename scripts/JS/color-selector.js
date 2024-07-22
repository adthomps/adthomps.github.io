document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById('bd-theme');
    const themeToggleText = document.getElementById('bd-theme-text');
    const dropdownItems = document.querySelectorAll('[data-bs-theme-value]');

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            const theme = item.getAttribute('data-bs-theme-value');
            document.documentElement.setAttribute('data-bs-theme', theme);
            themeToggleBtn.querySelector('.theme-icon-active use').setAttribute('href', item.querySelector('.theme-icon use').getAttribute('href'));
            themeToggleText.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
            localStorage.setItem('theme', theme);
        });
    });

    const storedTheme = localStorage.getItem('theme') || 'auto';
    document.documentElement.setAttribute('data-bs-theme', storedTheme);
    dropdownItems.forEach(item => {
        const theme = item.getAttribute('data-bs-theme-value');
        if (theme === storedTheme) {
            item.classList.add('active');
            themeToggleBtn.querySelector('.theme-icon-active use').setAttribute('href', item.querySelector('.theme-icon use').getAttribute('href'));
            themeToggleText.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
        } else {
            item.classList.remove('active');
        }
    });
});
