import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { ViewComponent } from './pages/view/view.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { RegisterCallbackComponent } from './pages/register-callback/register-callback.component';
import { SigninCallbackComponent } from './pages/signin-callback/signin-callback.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'view',
    component: ViewComponent,
  },
  {
    path: '**',
    component: NotFound404Component,
  },

  {
    path: 'register-callback',
    component: RegisterCallbackComponent,
  },
  {
    path: 'signin-callback',
    component: SigninCallbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
