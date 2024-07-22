(() => {
    'use strict';
  
    const getStoredTheme = () => localStorage.getItem('theme');
    const setStoredTheme = theme => localStorage.setItem('theme', theme);
  
    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme();
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };
  
    const setTheme = theme => {
      const effectiveTheme = theme === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
      document.documentElement.setAttribute('data-bs-theme', effectiveTheme);
      switchImageBasedOnTheme(effectiveTheme);
    };
  
    const showActiveTheme = (theme, focus = false) => {
      const themeSwitcher = document.querySelector('#bd-theme');
      const themeSwitcherText = document.querySelector('#bd-theme-text');
      const activeThemeIcon = themeSwitcher.querySelector('.theme-icon-active use');
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
      const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href');
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active');
        element.setAttribute('aria-pressed', 'false');
      });
  
      btnToActive.classList.add('active');
      btnToActive.setAttribute('aria-pressed', 'true');
      activeThemeIcon.setAttribute('href', svgOfActiveBtn);
      themeSwitcherText.textContent = `${theme.charAt(0).toUpperCase()}${theme.slice(1)}`;
      if (focus) {
        themeSwitcher.focus();
      }
    };
  
    const switchImageBasedOnTheme = theme => {
      const imagePaths = {
        'droneimage': {
          light: '../images/icons/drone-logo3.png',
          dark: '../images/icons/drone-logo1.png',
          auto: '../images/icons/drone-logo2.png',
        },
        'anetimage': {
          light: '../images/icons/anet/anet-logo1.png',
          dark: '../images/icons/anet/anet-logo2.png',
          auto: '../images/icons/anet/anet-logo2.png',
        },
        'cybsimage': {
          light: '../images/icons/cybs/cybersource-logo4.png',
          dark: '../images/icons/cybs/cybersource-logo6.png',
          auto: '../images/icons/cybs/cybersource-logo6.png',
        },
        'cardimage': {
          light: '../images/icons/cybs/cardinal-logo2.png',
          dark: '../images/icons/cybs/cardinal-logo1.png',
          auto: '../images/icons/cybs/cardinal-logo1.png',
        }
      };
  
      for (const imageId in imagePaths) {
        const image = document.querySelector(`#${imageId}`);
        if (image) {
          const imagePath = imagePaths[imageId][theme] || imagePaths[imageId]['auto'];
          image.src = imagePath;
        }
      }
    };
  
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme();
      if (!['light', 'dark'].includes(storedTheme)) {
        setTheme(getPreferredTheme());
      }
    });
  
    window.addEventListener('DOMContentLoaded', () => {
      const preferredTheme = getPreferredTheme();
      setTheme(preferredTheme);
      showActiveTheme(preferredTheme);
  
      document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value');
          setStoredTheme(theme);
          setTheme(theme);
          showActiveTheme(theme, true);
        });
      });
    });
  })();
  