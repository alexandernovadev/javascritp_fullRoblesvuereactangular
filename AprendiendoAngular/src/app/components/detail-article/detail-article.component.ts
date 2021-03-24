import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ArticuloService } from '../../services/articulo.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Article } from '../../models/article';
import { global } from '../../services/global';
import {Location} from '@angular/common'; 

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  article: any;
  url = global.url;

  constructor(private comp_padre:AppComponent,
    private _articlesSV: ArticuloService,
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _location: Location) 
    {
      this.comp_padre.size = false;
      
    }

  ngOnInit() 
  {
    this.getArticulo();

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  getArticulo()
  {
    this._activeRoute.params.subscribe(
      (params: Params)=>
      {
        console.log(params.id);
        let id = params.id;

        this._articlesSV.getArticle(id).subscribe(
          res=>
          {
            console.log(res);
            this.article = res.article;
            this.comp_padre.name = String(this.article.title);
          },
          err=>
          {
            console.log("Hay un error No existe Id");
            this._router.navigate(['error']);
          }
        );
        
      }
    )
  }


  op_removearticel(id)
  {
      document.getElementById('modal'+id).style.display='block';
      console.log(id);
  }

  close_modal(id)
  {
    document.getElementById('modal'+id).style.display='none';
  }

  eliminar(id:any)
  {
    this._articlesSV.remove(id).subscribe(
      res=>
      {
        console.log(res);
        if(res.status == "suucess")
        {
          this._router.navigate(['blog']);
        }
        this.close_modal(id);
      },
      err=>
      {
        console.log("Error al eliminar", err);
        
      }
    );
  }

  ngOnDestroy(): void 
  {
    this.comp_padre.size = true;
  }

  backbutton()
  {
    this._location.back(); 
  }
}
