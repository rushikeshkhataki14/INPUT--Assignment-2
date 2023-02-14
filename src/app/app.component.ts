import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "rushi";

  clicked(){
    alert("hello" + this.name);
  }

  textInput(event:Event){
    let ctrl = <HTMLInputElement>event.target;
     this.name = ctrl.value;
  }
}
