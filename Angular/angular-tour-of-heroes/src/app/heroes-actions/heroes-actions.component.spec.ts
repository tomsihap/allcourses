import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesActionsComponent } from './heroes-actions.component';

describe('HeroesActionsComponent', () => {
  let component: HeroesActionsComponent;
  let fixture: ComponentFixture<HeroesActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
