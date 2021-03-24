import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticuloService } from '../../services/articulo.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers : [ArticuloService]
})
export class SearchComponent implements OnInit {

  palabra: any;
  articles: Article[];

  constructor(private comp_padre:AppComponent,
              private _activedRoute: ActivatedRoute,
              private _articuloSV: ArticuloService) 
  {
    comp_padre.name = "Busqueda";
    this.comp_padre.size = false;
  }

  ngOnInit() {
    this.getResults();
  }

  getResults()
  {
    this._activedRoute.params.subscribe(
      (params: Params)=>
      {
        this.palabra = params.palabra;
        this._articuloSV.buscar(params.palabra).subscribe(
          res=>
          {
            console.log(res);
            this.articles = res.articles;
          },err=>console.log("No se pudo buscar")
          
        );
      }
    );
  }

  ngOnDestroy(): void 
  {
    this.comp_padre.size = true;
  }
}
