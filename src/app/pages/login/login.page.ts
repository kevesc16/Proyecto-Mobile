import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
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
  loading: boolean = true;

  constructor(
    private router: Router,
    private helperService:HelperService,
    private auth:AngularFireAuth
    
    ) { }
    
    simularCargaMenu =()=>
    this.loading= false;

  ngOnInit() {
    setTimeout(this.simularCargaMenu,2000);
  }
  async login(){
    if (this.email == "") {
      this.helperService.showAlert("Debe ingresar un Email.","Error");
      return;
    }
    if (this.contrasena == "") {
      this.helperService.showAlert("Debe ingresar una contraseña.","Error");
      return;
    }

    try { 
      const req= await this.auth.signInWithEmailAndPassword(this.email, this.contrasena);
      console.log("TOKEN",req.user?.getIdToken())
      await this.router.navigateByUrl('menu')
    }catch (error){
      if(this.email!= this.email){
        this.helperService.showAlert("El email no es valido.","Error");
        return;
      }
      if(this.contrasena!=this.contrasena){
        this.helperService.showAlert("La contraseña no es valida.","Error");
        return;
      }
      console.error('Error logging in:', error);
    this.helperService.showAlert('El correo electrónico o la contraseña son incorrectos.', 'Error');
    }
    this.email = "";
    this.contrasena = "";
  }
}