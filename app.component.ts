import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Simple Input and Display Example</h1>
    <input [(ngModel)]="userInput" placeholder="Enter your text">
    <button (click)="displayInput()">Display Input</button>
    <p *ngIf="displayedText">{{ displayedText }}</p>
  `,
  styleUrls: [],
})
export class AppComponent {
  userInput: string = '';
  displayedText: string = '';

  displayInput() {
    this.displayedText = this.userInput;
  }
}
