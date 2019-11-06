import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../servicios/heroes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(
    private _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params["termino"];
      this.heroes = this._heroesService.buscarHeroe(params["termino"]);
    });
  }
}
