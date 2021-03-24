import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit 
{

  public name: string;
  public surname: string;

  constructor(private roter:Router,
    private _activeroute: ActivatedRoute,
    private comp_padre:AppComponent) 
  {
    comp_padre.name = "Pagina";
    this.comp_padre.size = false;
  }

  ngOnInit()
  {
    this._activeroute.params.subscribe((params: Params)=>{
      console.log(params);
      this.name = params.name;
      this.surname = params.surname;
    });
  }
  ngOnDestroy(): void {
    this.comp_padre.size = true;
  }

}
