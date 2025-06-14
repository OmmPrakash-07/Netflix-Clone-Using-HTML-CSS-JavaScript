document.addEventListener('DOMContentLoaded', () => {
    // Search bar functionality
    const searchToggle = document.getElementById('searchToggle');
    const searchContainer = document.getElementById('searchContainer');
    const closeSearch = document.getElementById('closeSearch');

    searchToggle.addEventListener('click', () => {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            document.getElementById('searchInput').focus();
        }
    });

    closeSearch.addEventListener('click', () => {
        searchContainer.classList.remove('active');
    });

    // Season switching
    const seasonButtons = document.querySelectorAll('.season-btn');
    const episodeLists = document.querySelectorAll('.episode-list');

    seasonButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            seasonButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Hide all episode lists
            episodeLists.forEach(list => list.classList.remove('active'));
            // Show the selected season's episode list
            const season = button.getAttribute('data-season');
            document.querySelector(`.season-${season}`).classList.add('active');
        });
    });

    // Episode playback (simulated)
    const playButtons = document.querySelectorAll('.play-episode-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const episodeTitle = button.parentElement.querySelector('.episode-title').textContent;
            alert(`Playing: ${episodeTitle}`);
            // In a real implementation, this would trigger video playback
        });
    });
});