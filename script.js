function checkLogin(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('email-text').value;
    const password = document.getElementById('Password-text').value;
    const report = document.getElementById('report');

    const validUsername = 'chinedu';
    const validPassword = 'passme';

    if (username.length < 1 || password.length < 1 ) {
        report.innerHTML = "Please Input Your Login Details";
    } else if (username == validUsername && password === validPassword) {
        window.location.href = 'admin panel.htm';
    } else {
        report.innerHTML = "Invalid Login Details";
    }
}

document.getElementById('loginForm').addEventListener('submit', checkLogin);
;
let rocketLink = document.getElementById("rocket-link");
let arrowLink = document.getElementById("arrow-link");

console.log(arrowLink);

