import { Component,OnInit } from '@angular/core';
import { UserService } from "./../../service/user.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    // private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  login() {
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
