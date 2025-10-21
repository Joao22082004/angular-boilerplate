import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  constructor(private auth: AuthService, private router: Router) { }

  loginForm = new FormGroup<LoginForm>({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  submitForm(form: FormGroup<LoginForm>) {
    if (form.invalid) {
      return;
    }
    const email: string = form.controls.email.value;
    const password: string = form.controls.password.value;
    this.auth.login(email, password);
    this.router.navigate(['/listaF']);
  }
}