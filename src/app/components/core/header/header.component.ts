import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UsersService } from './../../../services/users/users.service';
import { falsestate } from '../../../states/login-state/login.actions';
import { lightstate, darkstate } from '../../../states/theme-state/theme.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedState$: Observable<boolean>
  loginStateValue: boolean;
  themeState$: Observable<boolean>
  themeStateValue: boolean;
  constructor(private usersService: UsersService, private router: Router, private store: Store<{ loggedIn: boolean, themeState: boolean }>) {
    this.loggedState$ = store.pipe(select('loggedIn'));
    this.themeState$ = store.pipe(select('themeState'));

  }

  ngOnInit(): void {
    this.loggedState$.subscribe((currentState) => {
      this.loginStateValue = currentState;
    })

    if (localStorage.getItem('currentUser')) {
      this.loginStateValue = true;
    }

    this.themeState$.subscribe((currentState) => {
      this.themeStateValue = currentState;
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loginStateValue = false;
    this.store.dispatch(falsestate());
  }

  login() {
    this.router.navigate(['/login']);
  }

  toggleValue(event) {
    var value = event.target.checked
    if (value == true) {
      this.store.dispatch(lightstate());     
    } else if (value == false) {
      this.store.dispatch(darkstate());      
    }
  }


}
