// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/features/users/registration/registration.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { ListLinksComponent } from './components/features/links/list-links/list-links.component';
import { AddLinksComponent } from './components/features/links/add-links/add-links.component';
import { PageNotFoundComponent } from './components/features/extra/page-not-found/page-not-found.component';
// services
import {LinksService} from './services/links/links.service';
import {UsersService} from './services/users/users.service';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    ListLinksComponent,
    AddLinksComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LinksService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
