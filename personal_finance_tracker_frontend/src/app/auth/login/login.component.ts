import { Component,OnInit } from '@angular/core';
import { UserService } from "./../../service/user.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  login() {
    // On successful login
    this.authService.login();
    this.router.navigate(['/dashboard']);
    const { username, password } = this.loginForm.value;
    // this.authService.login(username, password).subscribe(success => {
    //   if (success) {
    //     this.router.navigateByUrl('/home');
    //   } else {
    //     alert('Invalid credentials');
    //   }
    // });
  }

 
}
