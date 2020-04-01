import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'angular-tour-of-heroes';
  subTitle: string = "Ma première application Angular !";

  isHired: boolean;

  onSwitchHireActivated(isHired: boolean) {
    this.isHired = isHired;
  }
}