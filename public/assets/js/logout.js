
document.getElementById("logout-btn").addEventListener('click', function logout() {
    fetch('/auth/logout', {
        method: 'GET'
    })
    .then(response => {
        if (response.redirected) {
            // Redirect to the logout page if the server responded with a redirect
            window.location.href = response.url;
        }
    })
    .catch(error => console.error('Error:', error));
});