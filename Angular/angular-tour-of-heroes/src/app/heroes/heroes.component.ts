import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HEROES;
  selectedHero: Hero;
  @Input() isHireAllActivated: boolean;

  constructor() { }

  ngOnInit(): void { }

  onNameClick(clickedHero: Hero) {
    console.log('Le héros ' + clickedHero.name  + ' a été séléctionné.');

    localStorage.setItem("selectedHero", clickedHero.name);
    this.selectedHero = clickedHero;
  }
}