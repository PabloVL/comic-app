import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router) {
    console.log('constructor');
   }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();

    console.log(this.heroes);
  }


  verHeroe(idx: number): void{
      this.router.navigate( ['/heroe', idx] );
  }

}
