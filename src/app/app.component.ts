import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: 'Hello World !!!'
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
