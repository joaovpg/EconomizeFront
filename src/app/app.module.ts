import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarExtComponent } from './components/public/navbar-ext/navbar-ext.component';
import { HomeComponent } from './components/public/home/home.component';
import { CadastroComponent } from './components/public/cadastro/cadastro.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { HeroComponent } from './components/public/home/hero/hero.component';
import { LoginComponent } from './components/public/home/login/login.component';
import { SobreComponent } from './components/public/home/sobre/sobre.component';
import { PerfilComponent } from './components/private/perfil/perfil.component';
import { NavbarIntComponent } from './components/private/navbar-int/navbar-int.component';

// Bibliotecas
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarExtComponent,
    HomeComponent,
    CadastroComponent,
    RodapeComponent,
    HeroComponent,
    LoginComponent,
    SobreComponent,
    PerfilComponent,
    NavbarIntComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
