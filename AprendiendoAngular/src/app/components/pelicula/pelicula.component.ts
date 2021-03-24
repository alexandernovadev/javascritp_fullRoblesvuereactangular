import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculasComponent } from '../peliculas/peliculas.component';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() item:Pelicula;
  @Output() MarcarFavorita = new EventEmitter();

  constructor(private _padre:PeliculasComponent) { }

  ngOnInit() {
  }

  seleccionarPelicula(event, pelicula)
  {
    // Esto es mas facil para pasar informacion a CUALQUIER vista
    // con injeccion de dependencias 

    /* this._padre.peliculaFavorita =  pelicula;*/

    // Con OutPut, es una boleta, vamos a ver :/ 
    // Primero colocar la propiedad OutPut

    this.MarcarFavorita.emit({
      pelicula: pelicula
    });
    
  }
}
