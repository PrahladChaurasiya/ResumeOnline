// Profile Education Work Skills Achievements
		var profile = document.getElementById("profile");
		var profileLink = document.getElementById("profile-link");
		var education = document.getElementById("education");
		var educationLink = document.getElementById("education-link");
		var work = document.getElementById("work");
		var workLink = document.getElementById("work-link");
		var skills = document.getElementById("skills");
		var skillsLink = document.getElementById("skills-link");
		var achievements = document.getElementById("achievements");
		var achievementsLink = document.getElementById("achievements-link");
		var projects = document.getElementById("projects");
		var projectsLink = document.getElementById("projects-link");

		function openProfile() {
			profile.style.display = "block";
			education.style.display = "none";
			work.style.display = "none";
			skills.style.display = "none";
			achievements.style.display = "none";
			projects.style.display = "none";

			// add red background to profile button and remove from other buttons
			if(!profileLink.classList.contains("selected")) {
				profileLink.classList.add("selected");
					educationLink.classList.remove("selected");
					workLink.classList.remove("selected");
					skillsLink.classList.remove("selected");
					achievementsLink.classList.remove("selected");
					projectsLink.classList.remove("selected");
			}
		}

		function openEducation() {
			education.style.display = "block";
			profile.style.display = "none";
			work.style.display = "none";
			skills.style.display = "none";
			achievements.style.display = "none";
			projects.style.display = "none";

			// add red background to education button and remove from other buttons
			if(!educationLink.classList.contains("selected")) {
				educationLink.classList.add("selected");
					profileLink.classList.remove("selected");
					workLink.classList.remove("selected");
					skillsLink.classList.remove("selected");
					achievementsLink.classList.remove("selected");
					projectsLink.classList.remove("selected");
			}
		}

		function openWork() {
			work.style.display = "block";
			profile.style.display = "none";
			education.style.display = "none";
			skills.style.display = "none";
			achievements.style.display = "none";
			projects.style.display = "none";

			// add red background to work button and remove from other buttons
			if(!workLink.classList.contains("selected")) {
				workLink.classList.add("selected");
					profileLink.classList.remove("selected");
					educationLink.classList.remove("selected");
					skillsLink.classList.remove("selected");
					achievementsLink.classList.remove("selected");
					projects.classList.remove("selected");
			}
		}

		function openSkills() {
			skills.style.display = "block";
			work.style.display = "none";
			education.style.display = "none";
			profile.style.display = "none";
			achievements.style.display = "none";
			projects.style.display = "none";

			// add red background to skills button and remove from other buttons
			if(!skillsLink.classList.contains("selected")) {
				skillsLink.classList.add("selected");
					profileLink.classList.remove("selected");
					educationLink.classList.remove("selected");
					workLink.classList.remove("selected");
					achievementsLink.classList.remove("selected");
					projectsLink.classList.remove("selected");
			}
		}

		function openAchievements() {
			achievements.style.display = "block";
			work.style.display = "none";
			education.style.display = "none";
			profile.style.display = "none";
			skills.style.display = "none";
			projects.style.display = "none";

			// add red background to achievements button and remove from other buttons
			if(!achievementsLink.classList.contains("selected")) {
				achievementsLink.classList.add("selected");
					profileLink.classList.remove("selected");
					educationLink.classList.remove("selected");
					workLink.classList.remove("selected");
					skillsLink.classList.remove("selected");
					projectsLink.classList.remove("selected");
			}
		}

		function openProjects() {
			projects.style.display = "block";
			achievements.style.display = "none";
			work.style.display = "none";
			education.style.display = "none";
			profile.style.display = "none";
			skills.style.display = "none";

			// add red background to projects button and remove from other buttons
			if(!projectsLink.classList.contains("selected")) {
				projectsLink.classList.add("selected");
					profileLink.classList.remove("selected");
					educationLink.classList.remove("selected");
					workLink.classList.remove("selected");
					skillsLink.classList.remove("selected");
					achievementsLink.classList.remove("selected");
			}
		}

