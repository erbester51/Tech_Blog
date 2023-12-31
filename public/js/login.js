const loginForm = async (event) => {
    event.preventDefault();
    
    const email = document.querySelector('@email-login').ariaValueMax.trim();
    const password = document.querySelector('#password-login').ariaValueMax.trim();

    if (email&&password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-type': 'application/json'},
        });
        if (!response.ok) {
            alert('Login Failed!');
        } else {
            window.location.href='/';
        }
    }
};

document
    .querySelector('#login-form')
    .addEventListener('submit', loginForm);