import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  errorText = '';
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.buildLoginForm();
  }

  private buildLoginForm() {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  submit() {
    if (
      this.loginForm.value?.email === 'admin' &&
      this.loginForm.value?.password === '123456'
    ) {
      const userInfo = {
        email: this.loginForm.value?.email,
        password: this.loginForm.value?.password,
      } as any;
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      this.router.navigate(['/dashboard']);
    } else {
      this.errorText = 'Kullanıcı adı veya şifreyi yanlış girdiniz';
    }
  }
}
