import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ArticuloService } from '../../services/articulo.service';
import { Article } from '../../models/article';
import { global } from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  url = global.url;
  articles: Article[];

  constructor(private comp_padre:AppComponent,
              private _articlesSV: ArticuloService) 
  {
    console.log( "Viene", comp_padre.size);
    comp_padre.name = "Blog";
    this.comp_padre.size = false;
  }

  ngOnInit() 
  {
    this.getArticles();
  }

  getArticles()
  {
    this._articlesSV.getArticles().subscribe(
      res=>
      {
        console.log(res);
        this.articles = res.articles;
        
      },err=>console.log("Error al sacar articulo"));
  }

  ngOnDestroy(): void 
  {
    this.comp_padre.size = true;
  }
}
