import { Component, OnInit } from '@angular/core';
import {FormService} from '../form.service';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor(private fs : FormService) { }
   

  ngOnInit() {
    this.loadScript('http://thecodeplayer.com/uploads/js/jquery-1.9.1.min.js');
    this.loadScript('http://thecodeplayer.com/uploads/js/jquery.easing.min.js');
    this.loadScript('../assets/js/form.js');
    }
 
  
  
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }


  obj = {};

  //PROFILE
  profile(fullname,email,contactnumber,socialprofile,address){
    this.obj["fullname"]= fullname;
    this.obj["email"]= email;
    this.obj["contactnumber"]=contactnumber;
    this.obj["socialprofile"]=socialprofile;
    this.obj["address"]=address;
  
    console.log(this.obj);
    //  this.http.post(`${this.uri}/addResume`, this.obj)
    //  .subscribe(res => console.log('Done'));
  }


//Education
educationarr =[]

education(schoolname,schoollocation,degree,major,academicsession,score){
 let  educationdtls =[];
  educationdtls.push(schoolname);
  educationdtls.push(schoollocation);
  educationdtls.push(degree);
  educationdtls.push(major);
  educationdtls.push(academicsession);
  educationdtls.push(score);
  this.educationarr.push(educationdtls);
}

addeducation(educationarr){
  this.obj["education"]=this.educationarr;
  console.log(this.obj);
}

removeeducation(id){
  this.educationarr.splice(id,1);
}

//WORK EXPERIENCE

experiencearr =[];
experience(companyname,jobtitle,joblocation,jobsummary,jobperiod){
let experiencedtls =[];
experiencedtls.push(companyname);
experiencedtls.push(jobtitle);
experiencedtls.push(joblocation);
experiencedtls.push(jobsummary);
experiencedtls.push(jobperiod);
this.experiencearr.push(experiencedtls);

}

addexperience(){
  this.obj["experience"]=this.experiencearr;
  console.log(this.obj);
}

removeexperience(id){
  this.experiencearr.splice(id,1)

}

//ACHIEVEMENTS
achievementarr = [];
achievement(achievementname,awarder,achievementdate,achievementsummary){
let achievementdtls =[];
achievementdtls.push(achievementname);
achievementdtls.push(awarder);
achievementdtls.push(achievementdate);
achievementdtls.push(achievementsummary);
this.achievementarr.push(achievementdtls);

}
addachievement(achievementarr){
  this.obj["achievements"]=achievementarr;
  console.log(this.obj);

}

removeachievement(id){
this.achievementarr.splice(id,1);
}

  // SKILLS
  skillarr = [];
  skill(skilldetails){
  this.skillarr.push(skilldetails);
  }

  addskill(skilldtls){
    this.obj["skill"]=this.skillarr;
    console.log(this.obj);
  }

  removeskill(id){
    this.skillarr.splice(id,1);
  }

//PROJECTS
projectarr =[];
project(projectname,projectdate,projectdetail){
let projectdtls=[];
projectdtls.push(projectname);
projectdtls.push(projectdate);
projectdtls.push(projectdetail);
this.projectarr.push(projectdtls);
}
addproject(){
this.obj["projects"]=this.projectarr;
console.log(this.obj);
}

removeproject(id){
  this.projectarr.splice(id,1);

}

}
