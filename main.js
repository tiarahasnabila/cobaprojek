document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simulasi login sederhana
            if (username === 'admin' && password === 'admin') {
                window.location.href = 'dashboard.html';
            } else {
                alert('Login gagal! Periksa kembali username dan password Anda.');
            }
        });
    }
});
