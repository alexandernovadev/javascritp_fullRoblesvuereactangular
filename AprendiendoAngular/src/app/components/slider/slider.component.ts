import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, DoCheck
{

  @Input() nombre:string; 
  size:boolean; 
  // Este nombre viene del padre, then tome el dato del padre
  // y pongalo en nombre

  constructor(private _route: Router, private _padreapp: AppComponent) 
  {}

  ngOnInit()
  {
  }

  ngDoCheck()
  {
    this.size = this._padreapp.size;
  }

  redireccion()
  {
    this._route.navigate(['/blog']);
    // this._route.navigate(['/blog', 'param1', 'param2']);
  }
}
