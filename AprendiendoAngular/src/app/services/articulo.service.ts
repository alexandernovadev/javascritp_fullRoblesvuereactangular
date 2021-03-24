import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService 
{

  url: String;
  
  constructor(private _http: HttpClient)
  {
    this.url = global.url;
  }

  saveimg(id, file: File): Observable <any>
  {
    const form= new FormData();//Crea un formulario
    form.append('file0',file);//Asigna el campo File
    return this._http.post<Object>(this.url + 'upload_image/'+ id,form);
  
  }

  save(article:any): Observable <any>
  {
    let params = JSON.stringify(article);
    // Definir Cabecera
    let headers = new HttpHeaders().set('Content-Type', ' application/json');

    // Hacer Peticion Ajax
    return this._http.post(this.url + 'save', params, { headers });
  }

  edit(id:any, article:any): Observable <any>
  {
    let params = JSON.stringify(article);
    // Definir Cabecera
    let headers = new HttpHeaders().set('Content-Type', ' application/json');

    // Hacer Peticion Ajax
    return this._http.put(`${this.url}article/${id}`, params, { headers });
  }

  remove(id): Observable <any>
  {
    let headers = new HttpHeaders().set('Content-Type', ' application/json');

    // Hacer Peticion Ajax
    return this._http.delete(`${this.url}article/${id}`, { headers });
  }

  getArticles(): Observable <any>
  {
    let headers = new HttpHeaders().set('Content-Type', ' application/json');
    return this._http.get(this.url + 'articles', { headers });
  }
  getLastArticles(): Observable <any>
  {
    let headers = new HttpHeaders().set('Content-Type', ' application/json');
    return this._http.get(this.url + 'articles/last', { headers });
  }

  getArticle(id:any): Observable <any>
  {
    let headers = new HttpHeaders().set('Content-Type', ' application/json');
    return this._http.get(`${this.url}article/${id}`, { headers });
  }

  buscar(palabra: any): Observable <any>
  {
    // let headers = new HttpHeaders().set('Content-Type', ' application/json');
    return this._http.get(this.url + 'search/'+ palabra);
  }
}
