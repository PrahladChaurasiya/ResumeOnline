var account = document.getElementById("account");
		var accountLink = document.getElementById("account-link");
		var savedResume = document.getElementById("saved-resumes");
		var savedResumeLink = document.getElementById("saved-resumes-link");
		var password = document.getElementById("password");
		var passwordLink = document.getElementById("password-link");
		
		function openAccount() {
			account.style.display = "block";
			savedResume.style.display = "none";
			password.style.display = "none";
			
			// add red background to account button and remove from other buttons
			if(!accountLink.classList.contains("selected")) {
				accountLink.classList.add("selected");
					savedResumeLink.classList.remove("selected");
					passwordLink.classList.remove("selected");
			}
		}
		
		function openSavedResumes() {
			account.style.display = "none";
			savedResume.style.display = "block";
			password.style.display = "none";
			
			// add red background to saved-resumes button and remove from other buttons
			if(!savedResumeLink.classList.contains("selected")) {
				savedResumeLink.classList.add("selected");
					accountLink.classList.remove("selected");
					passwordLink.classList.remove("selected");
			}
		}
		
		function openPassword() {
			account.style.display = "none";
			savedResume.style.display = "none";
			password.style.display = "block";
			
			// add red background to password button and remove from other buttons
			if(!passwordLink.classList.contains("selected")) {
				passwordLink.classList.add("selected");
					accountLink.classList.remove("selected");
					savedResumeLink.classList.remove("selected");
			}
		}
		
		function clearFields() {
			var fields = document.getElementsByClassName("reset");
			for(var i = 0; i < fields.length; i++) {
				fields[i].value = '';
			}
		}
		