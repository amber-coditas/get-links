import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from './../../../../services/users/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private usersService: UsersService, private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }


  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/list-links']);
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      this.usersService.register(this.registerForm.value).subscribe((data: any[]) => {
      })
    }
  }

}
