import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { ViewComponent } from './pages/view/view.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { RegisterCallbackComponent } from './pages/register-callback/register-callback.component';
import { SigninCallbackComponent } from './pages/signin-callback/signin-callback.component';
import { EditorComponent } from './pages/editor/editor.component';
import { NoteViewerComponent } from './pages/note-viewer/note-viewer.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'register-callback',
    component: RegisterCallbackComponent,
  },
  {
    path: 'signin-callback',
    component: SigninCallbackComponent,
  },

  {
    path: 'view',
    component: ViewComponent,
    canActivate: [authGuard],
    canMatch: [authGuard],
  },

  {
    path: 'editor',
    component: EditorComponent,
    canActivate: [authGuard],
    canMatch: [authGuard],
  },

  {
    path: 'note-viewer/:id',
    component: NoteViewerComponent,
    canActivate: [authGuard],
    canMatch: [authGuard],
  },
  {
    path: '**',
    component: NotFound404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
