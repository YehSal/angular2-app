import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <h1>My Angular app</h1>

  <img [src] = "imageUrl" (click)='myMethod()'>
  <img [src] = "imageUrl" on-mouseover='myMethod2()'>

  <input (keyup)='userInput($event)'>
  <p>{{ myType }}</p>

  `
})
export class AppComponent {
  myType = '';
  imageUrl = 'http://img10.deviantart.net/e984/i/2015/287/c/5/red_dragon_by_sandara-d6hpycs.jpg';

  myMethod() {
    console.log('I was clicked');
  }

  myMethod2() {
    console.log('You hovered!');
  }

  userInput(event: any) {
    this.myType = event.target.value;
  }
}
