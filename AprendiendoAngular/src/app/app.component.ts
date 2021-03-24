import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AprendiendoAngular';
  name = "Este es una String del padre";
  size = true;
  palabra = ""
  constructor(private _router: Router)
  {
  }
  
  ngOnInit(): void {
    this.size = true;
  }

  buscar()
  {
    this._router.navigate(['buscar',this.palabra]);
  }
  
}
