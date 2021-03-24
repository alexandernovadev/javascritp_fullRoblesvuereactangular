import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ArticuloService } from '../../services/articulo.service';
import { Article } from '../../models/article';
import { global } from '../../services/global';
import {Location} from '@angular/common'; 



@Component({
  selector: 'app-edit-articles',
  templateUrl: './edit-articles.component.html',
  styleUrls: ['./edit-articles.component.css']
})
export class EditArticlesComponent implements OnInit 
{

  url = global.url;
  article: any;
  file:any;
  preview = false;
  image:any;
  flagwell= false;
  flagerror= false;


  constructor( private comp_padre:AppComponent,
            private _activedRoute: ActivatedRoute,
            private _articuloSV: ArticuloService,
            private _router:Router,
            private _location: Location )
  {
    comp_padre.name = "Editar Articulo";
    comp_padre.size = false;

    this.article = new Article("","","","","");
  }

  ngOnInit() 
  {
    this.getArticulo();
  } 

  getArticulo()
  {
    this._activedRoute.params.subscribe(
      (params: Params)=>
      {
        let id = params.id;
        this._articuloSV.getArticle(id).subscribe(
          res=>
          {
            this.article =  res.article;

          },err=>
          {
            console.log("Error al sacar la Pagina", err);
            this._router.navigate(['error']);
          }
        );
      }
    );
  }

  eventoimg(event){
    if(event.target.files && event.target.files.length>0){//Identifica si hay archivos
        const file=event.target.files[0];
        if(file.type.includes("image")){//Evaluar si es una imagen
            const reader= new FileReader();
            reader.readAsDataURL(file);
            reader.onload=function load(){
                this.preview = true;
                this.image=reader.result; //Asignar al thumbnail
            }.bind(this);
            this.file=file;

        }else{
          console.log("NO es una Imagen");
          
        }
    }
  }

  

  editarticle(form: any)
  {
    this.flagwell =  false;
    this.flagerror =  false;
    console.log(this.article)
    this._articuloSV.edit(this.article._id, this.article).subscribe(
      res=>
      {
     
        console.log(res);
    
        this.flagwell =  true;
        // this.article =  new Article("","","","","");
        if(this.image)
        {
          this._articuloSV.saveimg(this.article._id, this.file).subscribe(
                res=>{
                  console.log(res);
                  this.flagwell =  true;
                  this.article.image = res.nameimg;
                  // this.article =  new Article("","","","","");
                  // this.image =  null;
                },err=>
                {
                  this.flagerror = true;
                });
        }
        
        
      },err=>console.log("Eror al guadar", err)
      
    );
  }

  ngOnDestroy(): void {
    this.comp_padre.size = true;
  }

  backbutton()
  {
    this._location.back(); 
  }
}

