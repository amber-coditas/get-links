// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
// Components
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/features/users/registration/registration.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { ListLinksComponent } from './components/features/links/list-links/list-links.component';
import { AddLinksComponent } from './components/features/links/add-links/add-links.component';
import { PageNotFoundComponent } from './components/features/extra/page-not-found/page-not-found.component';
import { LoginComponent } from './components/features/users/login/login.component';
// Services
import { LinksService } from './services/links/links.service';
import { UsersService } from './services/users/users.service';
// Guards
import { AuthGuard } from './guards/auth.guard';
// Reducers
import { loginReducer } from './states/login-state/login.reducer';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ListLinksComponent,
    AddLinksComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ loggedIn: loginReducer })
  ],
  providers: [LinksService, UsersService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
