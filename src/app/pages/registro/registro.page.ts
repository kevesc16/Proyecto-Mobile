import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/-helper.service';
//import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre:string="";
  correo:string="";
  contrasena:string="";
  loading:boolean= true;


  constructor(
    private helper:HelperService,
    private router:Router,
   // private storage:StorageService, 
    private auth:AngularFireAuth
    ) { }
    simularCargaMenu =()=>
    this.loading= false;

    
    

  ngOnInit() {
    setTimeout(this.simularCargaMenu,1000);
  }
async reg(){
  let confirmar= await this.helper.showConfirm("Desea que sus datos sean guardados de manera permanente?","Shi","Ño")
  if (confirmar==true){
    this.helper.showAlert("Registro completado!","Aceptar")
    this.router.navigateByUrl('login')

    }
  }
  async registro(){
    const loader = await this.helper.showLoader("Cargando");
    try {
      var user = 
      [
        {
          correo:this.correo,
          contrasena:this.contrasena
        }
      ]
      const request = await this.auth.createUserWithEmailAndPassword(this.correo,this.contrasena);
     // this.storage.agregarUsuario(user);
      await this.helper.showAlert("Usuario registrado corretamente","Información");
      await this.router.navigateByUrl('login');
      await loader.dismiss();
    } catch (error:any) {
      if(error.code == 'auth/invalid-email'){
        await loader.dismiss();
        await this.helper.showAlert("Error en el formato del correo","Error");
      }
      if(error.code == 'auth/weak-password'){
        await loader.dismiss();
        await this.helper.showAlert("El largo de la contraseña es incorrecto","Error");
      }


      
    }
  }
}
