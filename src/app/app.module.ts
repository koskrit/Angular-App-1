import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.development';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { FooterComponent } from './core/footer/footer.component';
import { ViewComponent } from './pages/view/view.component';
import { ArticleComponent } from './pages/view/components/article/article.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { RegisterCallbackComponent } from './pages/register-callback/register-callback.component';
import { SigninCallbackComponent } from './pages/signin-callback/signin-callback.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

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
    RegisterCallbackComponent,
    SigninCallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModule.forRoot({
      config: {
        ...environment.oidc_config,
        logLevel: LogLevel.Debug,
      },
    }),
    AngularEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
