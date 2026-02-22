const form = document.getElementById('registerForm');
const messageDiv=document.getElementById('message');

// --- Validation functions ---
function validateName(name){
    return name.length >= 2 && name.length <= 50;
}

function validateEmail(email){
    // HTML5 email type already checks for '@', extra regex is optional
    return /\S+@\S+\.\S+/.test(email);
}

function validatePassword(password){
    // At least 8 characters, number, uppercase, lowercase, special char
    const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}/;
    return pattern.test(password);
}

function validateBirthdate(birthdate){
    // Must not include '-00' (invalid month/day)
    return birthdate && !birthdate.includes('-00');
}

// --- Save user to localStorage ---
function saveUser(user){

    // Read existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //Check if the email already exists
    const emailExists = users.some(u => u.email === user.email);

    //Check if the password already exists
    const passwordExists = users.some(u => u.password === user.password);
    
    if(emailExists){
        return {success: false,error: "email"}; //email already exists
    }

    if(passwordExists){
        return {success: false,error: "password"}; //password already exists

    }

    //If it doesn't exist, add it
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
    return {success: true};
}

// --- Form submit handler ---
form.addEventListener('submit',function(event){
    event.preventDefault(); // Prevent page reload
    messageDiv.textContent=''; // Clear previous messages
    messageDiv.style.color = 'red'; // default color


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const birthdate = document.getElementById('birthdate').value;

     // --- Validation checks ---
    if(!validateName(name)){
        messageDiv.textContent = "Name must be between 2 and 50 characters.";
        return;
    }

    if(!validateEmail(email)){
        messageDiv.textContent = "Please enter a valid email address.";
        return;
    }

    if(!validatePassword(password)){
        messageDiv.textContent="Password must be at least 8 characters and include number, uppercase, lowercase, special char."
        return;
    }

    if (!validateBirthdate(birthdate)){
        messageDiv.textContent="Please enter a valid birthdate (no zeros).";
        return;
    }

    // --- Create user object ---
    const users ={name,email,password,birthdate};

    // --- Save to localStorage ---
    const result = saveUser(users);

    if(!result.success){
        if(result.error === "email"){
            messageDiv.textContent = "This email is already registered!";
        } else if(result.error === "password"){
            messageDiv.textContent = "This password is already used by another account!";
        }
        return;
        }
   
    
    console.log("Registered user:", users);

    messageDiv.style.color = 'green';
    messageDiv.textContent = "User registered successfully!"
    form.reset();
});
