// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // Ajoutez cette ligne si ce n'est pas déjà fait
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListCategoriesComponent } from './list-categories-component/list-categories-component.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe'; // Chemin d'importation corrigé
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ListCategoriesComponent,
    HomeComponent,
    FilterPipe, // Ajoutez cette ligne
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Ajoutez cette ligne si ce n'est pas déjà fait
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
