// Catching Elements using vars :
var firstNameLabel = document.querySelector('.firstNameLabel');
var firstNameInput = document.querySelector('.firstNameInput');
var lastNameLabel = document.querySelector('.lastNameLabel');
var lastNameInput = document.querySelector('.lastNameInput');
var emailLabel = document.querySelector('.emailLabel');
var emailInput = document.querySelector('.emailInput');
var phoneLabel = document.querySelector('.phoneLabel');
var phoneInput = document.querySelector('.phoneInput');
var passLabel = document.querySelector('.passLabel');
var passInput = document.querySelector('.passInput');
var confirmPassLabel = document.querySelector('.confirmPassLabel')
var confirmPassInput = document.querySelector('.confirmPassInput');
var genderLabel = document.querySelector('.genderLabel');
var maleCheck = document.querySelector('.maleCheck');
var femaleCheck = document.querySelector('.femaleCheck');
console.log(maleCheck); // maleCheck.checked=true;
var dateLabel = document.querySelector('.dateLabel');
var dateInput = document.querySelector('.dateInput')
console.log(dateInput);


// Functions :
function validateFirstName(){
    if (firstNameInput.value.length <=2 || firstNameInput.value.includes(' ')  ) {
        firstNameLabel.innerHTML= 'Please enter a valid username!';
        firstNameLabel.classList.replace('text-primary','text-danger')
        return false;
    }else{
        firstNameLabel.innerHTML= 'First Name:';
        firstNameLabel.classList.replace('text-danger','text-primary')
        return true;
    }
}
function validateLastName(){
    if (lastNameInput.value.length <=2 || lastNameInput.value.includes(' ')  ) {
        lastNameLabel.innerHTML= 'Please enter a valid username!';
        lastNameLabel.classList.replace('text-primary','text-danger')
        return false;
    }else{
        lastNameLabel.innerHTML= 'Last Name:';
        lastNameLabel.classList.replace('text-danger','text-primary')
        return true;
    }
}
function validateEmail() {
    if (emailInput.value.includes(' ') || emailInput.value== "") {
        emailLabel.innerHTML= 'Please enter a valid email!';
        emailLabel.classList.replace('text-primary','text-danger')
        return false;
    }else{
        emailLabel.innerHTML= 'Email:';
        emailLabel.classList.replace('text-danger','text-primary');
        return true;
    }
}
function validatePhone() {
    if (phoneInput.value === "" || isNaN(phoneInput.value) ) {
        phoneLabel.innerHTML= 'Please enter a valid phone!';
        phoneLabel.classList.replace('text-primary','text-danger')
        return false;
    }else{
        phoneLabel.innerHTML= 'Phone:';
        phoneLabel.classList.replace('text-danger','text-primary');
        return true;
    }
}
function validatePassword() {
    if (passInput.value.includes(' ') || passInput.value== ""|| !passInput.value.includes('!') ) {
        passLabel.innerHTML= 'Please enter a valid password including(!)';
        passLabel.classList.replace('text-primary','text-danger')
        return false;
    }else{
        passLabel.innerHTML= 'Password:';
        passLabel.classList.replace('text-danger','text-primary');
        return true;
    }
}
function validateConfirmPassword() {
    if (confirmPassInput.value !== passInput.value) {
        confirmPassLabel.innerHTML = 'Passwords do not match!';
        confirmPassLabel.classList.replace('text-primary','text-danger');
        return false;
    } else {
        confirmPassLabel.innerHTML = 'Confirm Password :';
        confirmPassLabel.classList.replace('text-danger','text-primary');
        return true;
    }
}
function checkGender() {
    if (maleCheck.checked==false && femaleCheck.checked==false) {
        genderLabel.innerHTML = 'Please select a gender';
        genderLabel.classList.replace('text-primary','text-danger');
        return false;
    } else {
        genderLabel.innerHTML = 'Gender :';
        genderLabel.classList.replace('text-danger','text-primary');
        return true;
    }
}
function checkDate() {
    if (dateInput.value === "") {
        dateLabel.innerHTML = 'Please select a date';
        dateLabel.classList.replace('text-primary','text-danger');
        return false;
    } else {
        dateLabel.innerHTML = 'Date :';
        dateLabel.classList.replace('text-danger','text-primary');
        return true;
    }
}
function validateForm() {
    return validateFirstName() && validateLastName() && validateEmail() &&
        validatePhone() && validatePassword() && validateConfirmPassword() && checkGender() && checkDate();
}


