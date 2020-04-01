import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() heroToShow: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
