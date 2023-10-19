import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Device } from '@capacitor/device';
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
  helper: any;

  constructor(
    private router: Router,
    private helperService:HelperService,
    private auth:AngularFireAuth,



    ) { }

    simularCargaMenu =()=>
    this.loading= false;



  ngOnInit() {
    setTimeout(this.simularCargaMenu,2000);
  }

  async login(){
    const loader = await this.helperService.showLoader("Cargando");
    if (this.email == "") {
      await loader.dismiss();
      this.helperService.showAlert("Debe ingresar un Email.","Error");
      return;
    }
    if (this.contrasena == "") {
      await loader.dismiss();
      this.helperService.showAlert("Debe ingresar una contraseña.","Error");
      return;
    }

    try {
      const req= await this.auth.signInWithEmailAndPassword(this.email, this.contrasena);
      console.log("TOKEN",req.user?.getIdToken())
      await loader.dismiss();
      await this.router.navigateByUrl('menu')

    }catch (error){
      if(this.email!= this.email){
        await  loader.dismiss();
        this.helperService.showAlert("El email no es valido.","Error");
        return;
      }
      if(this.contrasena!=this.contrasena){
        await  loader.dismiss();
        this.helperService.showAlert("La contraseña no es valida.","Error");
        return;
      }
      await loader.dismiss();
      console.error('Error logging in:', error);
    this.helperService.showAlert('El correo electrónico o la contraseña son incorrectos.', 'Error');
    }
    //guardar informacion del ususario
  

  }
  
  

}
