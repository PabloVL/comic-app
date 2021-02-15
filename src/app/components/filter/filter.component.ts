import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  heroes: any = {};
  termino = '';


  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) {
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.filter;
      this.heroes = this.heroesService.buscarHeroes(this.termino);
    } );
  }

  verHeroe(idx: number): void{
    this.router.navigate( ['/heroe', idx] );

}

}
