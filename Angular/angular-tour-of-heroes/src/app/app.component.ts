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

  isButtonHeroesShowToggled: boolean;

  toggleHeroesShow() {
    this.isButtonHeroesShowToggled = !this.isButtonHeroesShowToggled;
  }

  onSwitchHireActivated(isHired: boolean) {
    this.isHired = isHired;
    console.log('event reçu de lenfant' + isHired);
  }
}