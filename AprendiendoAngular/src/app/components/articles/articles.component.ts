import { Component, OnInit, Input } from '@angular/core';
import { global } from '../../services/global';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  url = global.url;

  @Input() articles;

  constructor() {
    // onclick="document.getElementById('').style.display='block'"
  }

  ngOnInit() 
  {

  }

 
}
