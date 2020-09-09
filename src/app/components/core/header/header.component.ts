import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../../services/users/users.service';
import { Router } from '@angular/router';
import { falsestate } from '../../../states/login-state/login.actions';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedState$: Observable<boolean>
  loginStateValue: boolean;
  constructor(private usersService: UsersService, private router: Router, private store: Store<{ loggedIn: boolean }>) {
    this.loggedState$ = store.pipe(select('loggedIn'));
  }

  ngOnInit(): void {
    this.loggedState$.subscribe((currentState) => {
      this.loginStateValue = currentState;
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.store.dispatch(falsestate());
  }

  login() {
    this.router.navigate(['/login']);
  }

}
