import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor() { }

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

  public openModal(src: string) {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    var image = document.getElementById('img');
    image.src = src;
  }

  public hideModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
}
