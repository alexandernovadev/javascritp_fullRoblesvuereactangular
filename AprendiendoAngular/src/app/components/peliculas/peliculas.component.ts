import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit
{

  public peliculas: Pelicula[];
  public peliculaFavorita: Pelicula;

  constructor( private comp_padre:AppComponent) 
  {
    this.peliculas = [
      new Pelicula('Bad Brakin','https://images.clarin.com/2016/03/06/un-duo-explosivo-cranston-y___H1tDUFgEg_1256x620.jpg', 2020),
      new Pelicula('Insurgente','https://tupersonajefavorito.com/wp-content/uploads/2018/06/divergente-2.jpg', 2019),
      new Pelicula('Ant Man','https://aquipelis24.com/cdn/movie/l_ant-man-2-y-la-avispa-5c66f4723ca76.jpg', 2020),
      new Pelicula('Mr Robot', 'https://miro.medium.com/max/2400/1*VytWprd2ulmw2eIwnHMNJQ.jpeg',2018)
    ];
    comp_padre.name = "Peliculas";
    this.comp_padre.size = false;
  }

  ngOnInit()
  {}
  
  ngOnDestroy(): void {
    this.comp_padre.size = true;
  }

  mostrarfavoritas(event)
  {
    console.log(event.pelicula);
    this.peliculaFavorita = event.pelicula;
  }
}
