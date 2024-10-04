document.getElementById('menu-toggle').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
});

document.getElementById('back-button').addEventListener('click', function() {
    window.history.back(); // Goes back to the previous page
});

// Optional: Click outside to close the dropdown
window.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (!event.target.matches('#menu-toggle')) {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        }
    }
});