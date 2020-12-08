import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { UserLogin } from "src/app/interfaces/userLogin";
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: UserLogin = { username: '', password: '' };

  loginUser() {
    this.login.storeToken(this.user);
    this.router.navigate(['/']);
  }

  constructor(private login: LoginService, private router: Router) {}

  ngOnInit(): void {}
}