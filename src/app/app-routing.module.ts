import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/features/users/registration/registration.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { ListLinksComponent } from './components/features/links/list-links/list-links.component';
import { AddLinksComponent } from './components/features/links/add-links/add-links.component';
import { PageNotFoundComponent } from './components/features/extra/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/register', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'update-links', component: AddLinksComponent },
  { path: 'list-links', component: ListLinksComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
