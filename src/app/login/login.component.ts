import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  resposta;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    })
  }

  login(login) {
    this.loginService.login(login.value).subscribe((resp) => {
      this.resposta = resp;
    });
  }

}
