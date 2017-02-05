import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <h1>My Angular app</h1>

  <img [src] = "imageUrl" (click)='myMethod()'>
  <img [src] = "imageUrl" on-mouseover='myMethod2()'>

  <input (keyup)='userInput($event)'>
  <p>{{ myType }}</p>

  <button class="my-btn" [class.extraclass]="someProperty">Call to Action</button>
  <button class="my-btn" [style.border]="someProperty ? '5px solid yellow' : 'none'">Call to Action</button>
  <br><br>

  <button class="my-btn" [ngClass]="setClasses()">Call to Action</button>
  <button class="my-btn" [ngStyle]="setStyles()">Call to Action</button>
  `,


  styles: [`
    .my-btn { font-size: 1.7em; }
    .extraclass { background: black; color: white; }
    .anotherclass { font-weight: bold; }
  `]
})
export class AppComponent {
  myType = '';
  someProperty = true;
  anotherProperty = true;

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

  setClasses() {
    let classes = {
      extraclass: this.someProperty,
      anotherclass: this.anotherProperty
    };
    return classes;
  }

  setStyles() {
    let styles = {
      'font-style': this.someProperty ? 'italic' : '',
      'font-weight': this.anotherProperty ? 'bold' : ''
    };
    return styles;
  }
}
