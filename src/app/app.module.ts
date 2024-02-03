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
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import {
  AbstractSecurityStorage,
  AuthModule,
  LogLevel,
} from 'angular-auth-oidc-client';
import { RegisterCallbackComponent } from './pages/register-callback/register-callback.component';
import { SigninCallbackComponent } from './pages/signin-callback/signin-callback.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditorComponent } from './pages/editor/editor.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './core/components/loading/loading.component';
import { NoteItemComponent } from './pages/view/components/note-item/note-item.component';
import { NoteViewerComponent } from './pages/note-viewer/note-viewer.component';
import { NoteToolbarComponent } from './core/components/note-toolbar/note-toolbar.component';
import { NoContentComponent } from './pages/view/components/no-content/no-content.component';
import { OidcCustomStorageService } from './services/oidc-custom-storage.service';
import { ContentLoadingComponent } from './core/components/content-loading/content-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateComponent,
    FooterComponent,
    ViewComponent,
    NotFound404Component,
    RegisterCallbackComponent,
    SigninCallbackComponent,
    EditorComponent,
    LoadingComponent,
    NoteItemComponent,
    NoteViewerComponent,
    NoteToolbarComponent,
    NoContentComponent,
    ContentLoadingComponent,
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
    FormsModule,
  ],
  providers: [
    { provide: AbstractSecurityStorage, useClass: OidcCustomStorageService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
