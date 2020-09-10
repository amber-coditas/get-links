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
  siteTitle = 'GetLinks';
  constructor(private usersService: UsersService, private router: Router, private store: Store<{ loggedIn: boolean }>) {
    this.loggedState$ = store.pipe(select('loggedIn'));
    
  }

  ngOnInit(): void {   
    this.loggedState$.subscribe((currentState) => {
      this.loginStateValue = currentState;
      console.log("this.loginStateValu ngrx==",this.loginStateValue)
    }) 

    if (localStorage.getItem('currentUser')) {
     this.loginStateValue = true;
     console.log("this.loginStateValu ngrx==",this.loginStateValue);
    }


  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loginStateValue = false;
    this.store.dispatch(falsestate());
  }

  login() {
    this.router.navigate(['/login']);
  }

  }
