// sidebar.js
document.querySelector('.register-btn').addEventListener('click', function(event) {
    event.preventDefault();
    openSidebar();
});

function openSidebar() {
    var sidebar = document.getElementById('sidebar');
    var registerBtn = document.querySelector('.registerbtn');

    if (window.innerWidth <= 576) {
        sidebar.style.width = '100%';
    } else {
        sidebar.style.width = '50%';
    }

    document.getElementById('overlay').classList.add('visible');
    sidebar.classList.add('fade-in');

    // Wait for the content to finish fading in before showing the register button
    setTimeout(function() {
        registerBtn.style.opacity = '1';
    }, 500); // Match the duration of the sidebar content fade-in transition
}
function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    var registerBtn = document.querySelector('.registerbtn');

    sidebar.style.width = '0';
    document.getElementById('overlay').classList.remove('visible');
    sidebar.classList.remove('fade-in');

    // Reset register button opacity when closing sidebar
    registerBtn.style.opacity = '0';
}


// Close sidebar if overlay is clicked
document.getElementById('overlay').addEventListener('click', closeSidebar);