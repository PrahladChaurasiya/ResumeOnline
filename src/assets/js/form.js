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

		
		//Add More Schools
		function addSchool() {
			var div = document.createElement('div');
		
			div.className = 'row';
		
			div.innerHTML =
				'<div class="w3-half">\
				<p>School Name</p>\
				<input name = "schoolname" type = "text" placeholder="e.g; Lakshmi Narain College Of Technology" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-small reset">\
			</div>\
			<div class="w3-half">\
				<p>School Location</p>\
				<input name="schoollocation[]"type = "text" placeholder= "e.g; Bhopal" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-small reset">\
			</div>\
			<div class="w3-half">\
					<p>Degree</p>\
					<input name="degree[]"type = "text" placeholder="e.g; Bachelors of Engineering" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-small reset">\
			</div>\
			<div class="w3-half">\
					<p>Major</p>\
					<input name="major[]"type = "text" placeholder="e.g; Computer Science "style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-small reset">\
			</div>\
			<div class="w3-half">\
					<p>Academic Session</p>\
					<input name="academicsession[]" type = "text" placeholder="e.g; July 2015- June 2019 " style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-small reset">\
			</div>\
			<div class="w3-half" >\
					<p>Score</p>\
					<input name="score[]"type = "text" placeholder="e.g; 8.5 or 85%" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-small reset">\
			</div>\
					<button class = "w3-btn w3-red w3-round w3-margin-top " type="button" onclick="addSchool()"><a>Add School</a></button>\
					<button class = "w3-btn w3-blue w3-round w3-margin-top w3-margin-left" type="button" onclick="removeSchool(this)"><a>Remove School</a></button>';
							
		
			document.getElementById('School').appendChild(div);
		}
		
		function removeSchool(input) {
			document.getElementById('School').removeChild(input.parentNode);
		}

		//Add More Work
		function addWork() {
			var div = document.createElement('div');
		
			div.className = 'row';
		
			div.innerHTML =
				'<div class="w3-half">\
				<p>Company Name:</p>\
				<input name="companyname[]" type = "text" placeholder="e.g; Infosys Systems" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
		</div>\
		<div class="w3-half">\
				<p>Job Title:</p>\
				<input name="jobtitile[]" type = "text" placeholder="e.g; Software Engineer" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
		</div>\
		<div class="w3-half">\
				<p>Job Location:</p>\
				<input name="joblocation[]" type = "text" placeholder="e.g; Bangalore" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
		</div>\
		<div class="w3-half">\
				<p>Job Summary:</p>\
				<input name="jobsummary[]" type = "text" placeholder="e.g; I worked on XYZ project and improved xx% of efficiency." style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
		</div>\
		<div class="w3-half">\
				<p>Start Date:</p>\
				<input name="jobstartdate[]" type = "text" placeholder="e.g; MM/YY" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
		</div>\
		<div class="w3-half">\
				<p>End Date:</p>\
				<input name="jobenddate[]" type = "text" placeholder="e.g; MM/YY" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
		</div>\
	<button class = "w3-btn w3-red w3-round w3-margin-top " type="button" onclick="addWork()"><a>Add Work</a></button>\
				<button class = "w3-btn w3-blue w3-round w3-margin-top w3-margin-left" type="button" onclick="removeWork(this)"><a>Remove Work</a></button>';
				
		
			document.getElementById('workexp').appendChild(div);
		}
		
		function removeWork(input) {
			document.getElementById('workexp').removeChild(input.parentNode);
		}


		//Add More Skills
		function addSkill() {
			var div = document.createElement('div');
		
			div.className = 'row';
		
			div.innerHTML =
				'<div class="w3-half">\
				<p>Skill Name:</p>\
				<input name="skillname[]" type = "text" placeholder="e.g; Programming Languages" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
		</div>\
		<div class="w3-half">\
				<p>Skill Details:</p>\
				<input name="skilldetails[]" type = "text" placeholder="e.g; Python" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
		</div>\
		<button class = "w3-btn w3-red w3-round w3-margin-top" type="button" onclick="addSkill()"><a>Add Skill</a></button>\
				<button class = "w3-btn w3-blue w3-round w3-margin-top w3-margin-left" type="button" value="Remove Skill" onclick="removeSkill(this)"><a>Remove Skill</a></button>';
				
		
			document.getElementById('Skill').appendChild(div);
		}
		
		function removeSkill(input) {
			document.getElementById('Skill').removeChild(input.parentNode);
		}
		
		//Add More Achievements
		function addAchievement() {
			var div = document.createElement('div');
		
			div.className = 'row';
		
			div.innerHTML =
				'<div class="w3-half">\
				<p>Achievement Name:</p>\
				<input name ="achivementname[]"type = "text" placeholder="e.g; Supreme Hacker" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
				</div>\
				<div class="w3-half">\
						<p>Awarder:</p>\
						<input name ="awarder[]" type = "text" placeholder="e.g; Hacker Tech." style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
				</div>\
				<div class="w3-half">\
						<p>Achievement Date:</p>\
						<input name ="achivementdate[]" type = "text" placeholder="e.g; MM/YY" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
				</div>\
				<div class="w3-half">\
						<p>Summary:</p>\
						<input name ="achievementsummary[]" type = "text" placeholder="e.g; Recognised for making best project in Hackathon" style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
				</div>\
				<button class = "w3-btn w3-red w3-round w3-margin-top" type="button" onclick="addAchievement()"><a>Add Achievement</a></button>\
				<button class = "w3-btn w3-blue w3-round w3-margin-top w3-margin-left" type="button" onclick="removeAchievement(this)"><a>Remove Achievement</a></button>';
				
		
			document.getElementById('Achievement').appendChild(div);
		}
		
		function removeAchievement(input) {
			document.getElementById('Achievement').removeChild(input.parentNode);
		}

		//Add More Projects
		function addProject() {
			var div = document.createElement('div');
		
			div.className = 'row';
		
			div.innerHTML =
				'<div class="w3-half">\
				<p>Project Name:</p>\
				<input name="projectname[]"type = "text" placeholder="e.g; Resume Online " style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
		</div>\
		<div class="w3-half">\
				<p>Project Date:</p>\
				<input name="projectdate[]"type = "text" placeholder="e.g; MM/YY"style = "width: 500px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
		</div>\
		<div>\
				<p>Project Details:</p>\
				<input name="projectdetails[]"type = "text" placeholder="e.g; A web application for resume desingning."style = "width: 1050px; border: 0px solid black;" class = "w3-container w3-light-grey w3-padding w3-margin-bottom w3-small reset">\
		</div>\
		<button class = "w3-btn w3-red w3-round w3-margin-top" type="button" onclick="addProject()"><a>Add Project</a></button>\
				<button class = "w3-btn w3-blue w3-round w3-margin-top w3-margin-left" type="button" onclick="removeProject(this)"><a>Remove Project</a></button>';
				
		
			document.getElementById('Project').appendChild(div);
		}
		
		function removeProject(input) {
			document.getElementById('Project').removeChild(input.parentNode);
		}
