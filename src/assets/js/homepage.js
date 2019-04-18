function openLogin() {
				x = document.getElementById("login-div");
				x.style.display = "block";
				var x = document.getElementById("signup-div");
				x.style.display = "none";
				x = document.getElementById("login-div");
				x.style.display = "block";
				x = document.getElementById("forgot-password-div");
				x.style.display = "none";
			}

function openSignUp() {
	
				x = document.getElementById("signup-div");
				x.style.display = "block";
				var x = document.getElementById("login-div");
				x.style.display = "none";
				x = document.getElementById("forgot-password-div");
				x.style.display = "none";
				
			}
			
			
			
			function openForgotPassword() {
				var loginDiv = document.getElementById("login-div");
				var signUpDiv = document.getElementById("signup-div");
				var forgotPasswordDiv = document.getElementById("forgot-password-div");
				loginDiv.style.display = "none";
				signUpDiv.style.display = "none";
				forgotPasswordDiv.style.display = "block";
			}

			// Fading Animation 

			var animateHTML = function() {
			var elems;
			var windowHeight;
			function init() {
				
				elems = document.querySelectorAll('.hidden');
				windowHeight = window.innerHeight;
				addEventHandlers();
				checkPosition();
			}
			function addEventHandlers() {
				
				window.addEventListener('scroll', checkPosition);
				window.addEventListener('resize', init);
			}
			function checkPosition() {
				for (var i = 0; i < elems.length; i++) {
				var positionFromTop = elems[i].getBoundingClientRect().top;
				if (positionFromTop - windowHeight <= 0) {
					elems[i].className = elems[i].className.replace(
					'hidden',
					'fade-in-element'
					);
				}
				}
			}
			return {
				init: init
			};
			};
			animateHTML().init();

			// To check password and confirm password fields are same
			var check = function() {
				if (document.getElementById('password').value ==
				  document.getElementById('confirm_password').value) {
				  document.getElementById('message').style.color = 'green';
				  document.getElementById('message').innerHTML = 'Passwords Matched';
				} else {
				  document.getElementById('message').style.color = 'red';
				  document.getElementById('message').innerHTML = 'Passwords Not Matched ';
				}
			  }

//Email Validation
/*
const signUpForm = document.getElementById('signup');
const emailField = document.getElementById('emailField');
const okButton = document.getElementById('okButton');
  
emailField.addEventListener('keyup', function (event) {
  isValidEmail = emailField.checkValidity();
  
  if ( isValidEmail ) {
    okButton.disabled = false;
  } else {
    okButton.disabled = true;
  }
});
  
okButton.addEventListener('click', function (event) {
  signUpForm.submit();
});*/
