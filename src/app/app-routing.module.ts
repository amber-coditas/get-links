import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/features/users/registration/registration.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { ListLinksComponent } from './components/features/links/list-links/list-links.component';
import { AddLinksComponent } from './components/features/links/add-links/add-links.component';
import { PageNotFoundComponent } from './components/features/extra/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/features/users/login/login.component';
const routes: Routes = [
  { path: '', component: ListLinksComponent, canActivate: [AuthGuard] },
  { path: 'login', component : LoginComponent ,canActivate: [AuthGuard]},
  { path: 'header', component: HeaderComponent ,canActivate: [AuthGuard]},
  { path: 'footer', component: FooterComponent ,canActivate: [AuthGuard]},
  { path: 'register', component: RegistrationComponent ,canActivate: [AuthGuard]},
  { path: 'login', component: RegistrationComponent ,canActivate: [AuthGuard]},
  { path: 'update-links', component: AddLinksComponent ,canActivate: [AuthGuard]},
  { path: 'update-links/:id', component: AddLinksComponent ,canActivate: [AuthGuard]},
  { path: 'list-links', component: ListLinksComponent ,canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: ' ' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
