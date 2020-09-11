import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './../../../../services/users/users.service';
import { truestate } from '../../../../states/login-state/login.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedState$: Observable<boolean>;
  loginStateValue: boolean;
  keyboardImageUrl: string = './../../../../../assets/keyboard.png'
  constructor(
    private usersService: UsersService,
    private router: Router,
    private store: Store<{ loggedIn: boolean }>) {
    this.loggedState$ = store.pipe(select('loggedIn'));
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/list-links']);
    }
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      this.usersService.login(this.loginForm.value).subscribe((users: any[]) => {
        let user = users[0]
        if (user && user['token']) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.store.dispatch(truestate());
          this.loggedState$.subscribe((currentState) => {
            this.loginStateValue = currentState;
          })
          this.router.navigate(['/list-links']);
        }
      })
    }
  }

}
