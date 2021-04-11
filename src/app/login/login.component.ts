import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
      username: new FormControl(null,Validators.required),
      password: new FormControl(null, Validators.required)
    })

  constructor() { }

  ngOnInit(): void {
    
  }

  get username() { return this.formLogin.get('username'); }

  iniciarSesion(){
    console.log("inicio de sesion")
    console.log(this.formLogin.value)



  }



}
