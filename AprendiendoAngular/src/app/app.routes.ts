import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
  

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PageoneComponent } from './components/pageone/pageone.component';
import { ErrorComponent } from './components/error/error.component';
import { SearchComponent } from './components/search/search.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { EditArticlesComponent } from './components/edit-articles/edit-articles.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'formulario', component: FormComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'pagina', component: PageoneComponent },
    { path: 'article/:id', component: DetailArticleComponent },
    { path: 'article-edit/:id', component: EditArticlesComponent },
    { path: 'buscar/:palabra', component: SearchComponent },
    { path: 'pagina/:name/:surname', component: PageoneComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', component: ErrorComponent },
];

/* Con el decorador NgModules */

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class RutesRoutingModule {}

/* Con ModuleWithProviders*/

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

