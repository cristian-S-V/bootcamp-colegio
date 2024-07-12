document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple authentication check (replace with actual authentication logic)
        if (username === 'usuario' && password === 'contraseña') {
            window.location.href = '/sub-page/bienvenido.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});
