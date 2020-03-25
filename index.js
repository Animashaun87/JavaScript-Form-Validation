const form = document.getElementById('form');
const userName = document.getElementById('user-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener("submit", submitAccount);

function submitAccount(e) {
	e.preventDefault();

	const userValue = userName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const confirmPasswordValue = confirmPassword.value.trim(); 

	if (userValue === "") {
       setError(userName, 'Username cannot be blank');
	} else {
       setSuccess(userName);
	}
	if (emailValue === "") {
		setError(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setError(email, 'Email is not valid');
	} else {
		setSuccess(email);
	}
	if (passwordValue === "") {
		setError(password, 'Password cannot be blank');
	} else if (passwordValue.length < 8) {
		setError(password, 'Password must be 8 characters');
	} else {
		setSuccess(password);
	}
	if (confirmPasswordValue === "") {
		setError(confirmPassword, 'Confirm password cannot be blank');
	} else if (passwordValue !== confirmPasswordValue || confirmPasswordValue.length < 8) {
		setError(confirmPassword, 'Passwords does not match');
	} else {
		setSuccess(confirmPassword);
	}
    //show success message
}

function setError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	//add error message inside small
	small.innerHTML = message;
	//add error class
	formControl.className = 'form-control error';
}

function setSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function successMessage() {
	const div = document.createElement('span');
	div.style.color = "#2ecc71";
	div.appendChild(document.createTextNode('Login Successful!'));
	const container = document.querySelector('.container');
	const form = document.querySelector('#form');
	container.insertBefore(div, form);
	setTimeout(() => {
		div.remove();
	},3000);
}