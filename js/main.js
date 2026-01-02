// Update date and time
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    document.querySelector('.date-display span:nth-child(1)').innerHTML = `<i class="fas fa-calendar-alt"></i> ${dateString}`;
    document.querySelector('.date-display span:nth-child(2)').innerHTML = `<i class="fas fa-clock"></i> ${timeString}`;
}

// Initialize date and update every minute
updateDateTime();
setInterval(updateDateTime, 60000);

// Make article images clickable
if (document.querySelectorAll('.article-image').length) {
    document.querySelectorAll('.article-image').forEach(image => {
        image.addEventListener('click', function() {
            const articleLink = this.closest('.news-article').querySelector('.read-more').href;
            window.location.href = articleLink;
        });
        image.style.cursor = 'pointer';
    });
}

// Search functionality (if search bar exists)
if (document.querySelector('.search-bar')) {
    document.querySelector('.search-bar button').addEventListener('click', function() {
        const searchTerm = document.querySelector('.search-bar input').value;
        if (searchTerm.trim() !== '') {
            alert(`Searching for: ${searchTerm}`);
            // In a real implementation, this would redirect to search results
        }
    });
    document.querySelector('.search-bar input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.querySelector('.search-bar button').click();
        }
    });
}

// Newsletter subscription
if (document.querySelector('.subscribe-form')) {
    document.querySelector('.subscribe-form button').addEventListener('click', function(e) {
        e.preventDefault();
        const email = document.querySelector('.subscribe-form input').value;
        if (email && email.includes('@')) {
            alert(`Thank you for subscribing with: ${email}`);
            document.querySelector('.subscribe-form input').value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Loader functionality
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
});