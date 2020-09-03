import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsersService } from './../../../../services/users/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isLoginForm: boolean = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  allUsers: any;
  constructor(private usersService: UsersService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
 
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.usersService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.allUsers = data;
    })
  }

  openLoginForm() {
    this.isLoginForm = true;
    
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.router.navigate(['/list-links']);
    }
  }

  openRegistrationForm() {
    this.isLoginForm = false;

  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.isLoginForm = true;
    }
  }




}
