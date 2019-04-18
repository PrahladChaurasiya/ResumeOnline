import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {UserService} from '../user.service';
import { LoginService } from '../login.service';
import {Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private us: UserService, private logi:LoginService, private router:Router) {
    this.createForm();
  }

  public login(user,pass){

    var user1 = user.value;
    var pass1 = pass.value;
    // var user = document.getElementsByName("user")[0].innerText;
    // var pass = document.getElementsByName("pass")[0].innerText;
    
    console.log("hello "+user1+" "+pass1);
    this.logi.getHostElement(user1,pass1).subscribe((data) => {
      if(data == "True"){
        this.router.navigate(['/templates']);
      }
      else{
        alert("invalid user/password")
        user.value = "";
        pass.value = "";
        this.router.navigate(['/login']);
      }
    })

  }

  createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      confpass: ['',Validators.required]
    });
  }

  addUser(username,email,password){
    this.us.addUser(username,email,password);
  }

  ngOnInit() {
    this.loadScript('../assets/js/homepage.js');
    
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

}