import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor() { }

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

}
