import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-heroes-actions',
  templateUrl: './heroes-actions.component.html',
  styleUrls: ['./heroes-actions.component.scss']
})
export class HeroesActionsComponent implements OnInit {

  isActivated: boolean = false;
  isHireAllActivated: boolean = false;

  @Output() switchHireActivated = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onRest() {
    this.isActivated = !this.isActivated;
  }

  onHireAll() {
    this.isHireAllActivated = true;
    this.switchHireActivated.emit(true);
  }

  onFireAll() {
    this.isHireAllActivated = false;
    this.switchHireActivated.emit(false);
  }

  hireButtonClass() {
    return (this.isHireAllActivated) ? 'btn-danger' : 'btn-primary'; 
  }
}
