/**
 * Main DOM Content Loaded Event Handler
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  highlightActiveNavLink();
  setupSearchFunctionality();
  setupVideoHoverPreview();
  setupHeroVideoHover();
});

/**
 * Highlights the active navigation link based on current page
 */
function highlightActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Sets up all search-related functionality
 */
function setupSearchFunctionality() {
  const searchToggle = document.getElementById('searchToggle');
  const searchContainer = document.getElementById('searchContainer');
  const closeSearch = document.getElementById('closeSearch');
  const searchInput = document.getElementById('searchInput');

  // Toggle search bar visibility
  searchToggle.addEventListener('click', function() {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
      searchInput.focus();
    }
  });

  // Close search bar when X is clicked
  closeSearch.addEventListener('click', function() {
    searchContainer.classList.remove('active');
  });

  // Close when clicking outside
  document.addEventListener('click', function(event) {
    if (!searchContainer.contains(event.target) && 
        event.target !== searchToggle) {
      searchContainer.classList.remove('active');
    }
  });

  // Live search functionality
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const contentCards = document.querySelectorAll('.content-card');
    
    contentCards.forEach(card => {
      const title = card.querySelector('.overlay-title').textContent.toLowerCase();
      card.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
  });
}

/**
 * Sets up video preview on hover functionality
 */
function setupVideoHoverPreview() {
  const cards = document.querySelectorAll('.content-card');
  let hoverTimer;
  const hoverDelay = 700; // 0.7 seconds delay

  cards.forEach(card => {
    const video = card.querySelector('.card-preview');
    
    card.addEventListener('mouseenter', () => {
      hoverTimer = setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(e => console.log("Autoplay prevented:", e));
        }
      }, hoverDelay);
    });

    card.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimer);
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  });
}

/**
 * Sets up hero video hover functionality
 */
function setupHeroVideoHover() {
  const hero = document.querySelector('.hero');
  if (hero) {
    const video = hero.querySelector('.hero-video');
    hero.addEventListener('mouseenter', () => {
      video.play().catch(e => console.log("Autoplay prevented:", e));
    });
    hero.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  }
}