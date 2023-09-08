import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/-helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  contrasena: string = '';
  

  constructor(
    private router: Router,
    private helperService:HelperService) {
      
    }

  ngOnInit() {
  }

  login() {
    if (this.email == '') {
      this.helperService.showAlert("Ingrese un email","Error");
      //alert('Debe ingresar un email.');
      return;
    }
    if (this.contrasena == '') {
      this.helperService.showAlert("Ingrese una contraseña","Error");
      //alert('Debe ingresar una contraseña.');
      return;
    }

    if (this.email == 'kev' && this.contrasena == '123') {
      //alert("Login correcto.");
      this.router.navigateByUrl('/home');
    } else {
      this.helperService.showAlert("El email o el correo son incorrectos","Error");
      //alert('Crdeneciales no validas.');
    }
  }
}