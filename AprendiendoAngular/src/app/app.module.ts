import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routes';
import { MomentModule } from 'angular2-moment';

import { FormsModule }from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';     

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PageoneComponent } from './components/pageone/pageone.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { EditArticlesComponent } from './components/edit-articles/edit-articles.component';
import { SearchComponent } from './components/search/search.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormComponent,
    PageoneComponent,
    PeliculasComponent,
    ErrorComponent,
    PeliculaComponent,
    ArticlesComponent,
    EditArticlesComponent,
    SearchComponent,
    DetailArticleComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
