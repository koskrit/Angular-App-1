import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { FooterComponent } from './core/footer/footer.component';
import { ViewComponent } from './pages/view/view.component';
import { ArticleComponent } from './pages/view/components/article/article.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateComponent,
    FooterComponent,
    ViewComponent,
    ArticleComponent,
    NotFound404Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
