import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarExtComponent } from './navbar-ext/navbar-ext.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HeroComponent } from './home/hero/hero.component';
import { LoginComponent } from './home/login/login.component';
import { SobreComponent } from './home/sobre/sobre.component';
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
