import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ArticuloService } from '../../services/articulo.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[];
  constructor(private comp_padre:AppComponent,
              private _articuloSV: ArticuloService) 
  {
    comp_padre.name = "Bienvenido a mi web";
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles()
  {
    this._articuloSV.getLastArticles().subscribe(
      res=>
      {
        console.log(res);
        
        this.articles = res.articles;

      },err=>console.log("erro", err)
      
    );
  }

}
