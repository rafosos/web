import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: 'home/:usuario', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastrar', component: CadastrarComponent},
  { path: 'pageNotFound', component: PageNotFoundComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
