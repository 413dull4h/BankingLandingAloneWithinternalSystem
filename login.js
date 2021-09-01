document.getElementById('login-submit').addEventListener('click', function () {
    // User mail
    const fmail = document.getElementById('Email');
    const umail = fmail.value;
    // User password
    const fpass = document.getElementById('password');
    const upass = fpass.value;
    // conditions
    if (umail == 'asd' && upass == 'asd') {
        window.location.href = 'Banking.html'
    }
})


