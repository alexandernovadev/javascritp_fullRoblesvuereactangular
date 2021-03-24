import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Article } from '../../models/article';
import { Form } from '@angular/forms';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit 
{

  article: any;
  fileToUpload: File = null;
  nametempimg: String;

  previweimg: File;
  file:any;

  image:any;

  flagwell= false;
  flagerror= false;

  constructor( private comp_padre:AppComponent,
              private _articleSV: ArticuloService)
  {
    comp_padre.name = "Formulario";
    this.comp_padre.size = false;

    this.article =  new Article("","","","","");

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.comp_padre.size = true;
  }

  savearticle(formaddArticle: Form)
  {
    this.flagwell =  false;
    this.flagerror =  false;
    // console.log(formaddArticle)
    this._articleSV.save(this.article).subscribe(
      res=>
      {
        this.article._id = res.article._id;
        console.log(res);
    
        this.flagwell =  true;
        this.article =  new Article("","","","","");
        if(this.image)
        {
          this._articleSV.saveimg(res.article._id, this.file).subscribe(
                res=>{
                  console.log(res);
                  this.flagwell =  true;
                  this.article =  new Article("","","","","");
                  this.image =  null;
                },err=>
                {
                  this.flagerror = true;
                });
        }
        
        
      },err=>console.log("Eror al guadar", err)
      
    );
  }

  eventoimg(event){
    if(event.target.files && event.target.files.length>0){//Identifica si hay archivos
        const file=event.target.files[0];
        if(file.type.includes("image")){//Evaluar si es una imagen
            const reader= new FileReader();
            reader.readAsDataURL(file);
            reader.onload=function load(){
                this.image=reader.result; //Asignar al thumbnail
            }.bind(this);
            this.file=file;

        }else{
          console.log("NO es una Imagen");
          
        }
    }
  }
}
