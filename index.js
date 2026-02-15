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

// Refactored Functions :
function replaceColor(labelName){
    labelName.classList.replace('text-primary','text-danger')
    return false;
}

function backToNormal(labelName,text){
    labelName.innerHTML= text;
    labelName.classList.replace('text-danger','text-primary');
    return true;
}

// Main Functions :
function validateFirstName(){
    if (firstNameInput.value.length <=2 || firstNameInput.value.includes(' ')  ) {
        firstNameLabel.innerHTML= 'Please enter a valid username!';
        return replaceColor(firstNameLabel);
    }else{
        return backToNormal(firstNameLabel,'First Name: ');
    }
}
function validateLastName(){
    if (lastNameInput.value.length <=2 || lastNameInput.value.includes(' ')  ) {
        lastNameLabel.innerHTML= 'Please enter a valid username!';
        return replaceColor(lastNameLabel);
    }else{
        return backToNormal(lastNameLabel,'Last Name:')
    }
}
function validateEmail() {
    if (emailInput.value.includes(' ') || emailInput.value== "") {
        emailLabel.innerHTML= 'Please enter a valid email!';
        return replaceColor(emailLabel);
    }else{
        return backToNormal(emailLabel,'Email :');
    }
}
function validatePhone() {
    if (phoneInput.value === "" || isNaN(phoneInput.value) ) {
        phoneLabel.innerHTML= 'Please enter a valid phone!';
        return replaceColor(phoneLabel);
    }else{
        return backToNormal(phoneLabel,'Phone :');
    }
}
function validatePassword() {
    if (passInput.value.includes(' ') || passInput.value== ""|| !passInput.value.includes('!') ) {
        passLabel.innerHTML= 'Please enter a valid password including(!)';
        return replaceColor(passLabel);
    }else{
        return backToNormal(passLabel,'Password :');
    }
}
function validateConfirmPassword() {
    if (confirmPassInput.value !== passInput.value) {
        confirmPassLabel.innerHTML = 'Passwords do not match!';
        return replaceColor(confirmPassLabel);
    } else {
        return backToNormal(confirmPassLabel,'Confirm Password :');
    }
}
function checkGender() {
    if (maleCheck.checked==false && femaleCheck.checked==false) {
        genderLabel.innerHTML = 'Please select a gender';
        return replaceColor(genderLabel);
    } else {
        return backToNormal(genderLabel,'Gender :');
    }
}
function checkDate() {
    if (dateInput.value === "") {
        dateLabel.innerHTML = 'Please select a date';
        return replaceColor(dateLabel);
    } else {
        return backToNormal(dateLabel,'Date :');
    }
}
function validateForm() {
    return validateFirstName() && validateLastName() && validateEmail() &&
        validatePhone() && validatePassword() && validateConfirmPassword() && checkGender() && checkDate();
}
