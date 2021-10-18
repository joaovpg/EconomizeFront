import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/public/cadastro/cadastro.component';
import { HomeComponent } from './components/public/home/home.component';
import { PerfilComponent } from './components/private/perfil/perfil.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cadastro', component: CadastroComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
