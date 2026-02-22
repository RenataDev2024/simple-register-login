// --- DOM elements ---
const form = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

// --- Form submit handler ---
form.addEventListener('submit', function(event){
    event.preventDefault();
    messageDiv.textContent='';
    messageDiv.style.color='red'; //default

    const email=document.getElementById('email').value.trim();
    const password =document.getElementById('password').value.trim();

    // --- Retrieve users array from localStorage ---
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // --- Find matching user ---
    const savedUser = users.find(u => u.email === email && u.password === password);

    if(!savedUser){
        messageDiv.textContent="No registered user found. Please register first.";
        console.warn("Login failed: no user in localStorage");
        return;
    }


    // --- Login success ---
    messageDiv.style.color='green';
    messageDiv.textContent=`Welcome back, ${savedUser.name}!`;
    console.log("Login successful:", savedUser);
    

})