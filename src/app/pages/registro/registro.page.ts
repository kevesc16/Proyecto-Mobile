import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Comuna } from 'src/app/models/comuna';
import { Region } from 'src/app/models/region';
import { HelperService } from 'src/app/service/-helper.service';
import { LocationService } from 'src/app/service/location.service';
import { StorageService } from 'src/app/service/storage.service';

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

  regiones:Region[]=[];
  comunas:Comuna[]=[];

  regionSeleccionado:number = 0;
  comunaSeleccionada:number = 0;


  constructor(
    private helper:HelperService,
    private router:Router,
    private storage:StorageService,
    private auth:AngularFireAuth,
    private location:LocationService,

    ) { }
    simularCargaMenu =()=>
    this.loading= false;

    async cargarRegion(){
      const req = await this.location.getRegion();
      this.regiones = req.data;
      console.log("REGION",this.regiones);
    }

    async cargarComuna(){
      const req = await this.location.getComuna(this.regionSeleccionado);
      this.comunas = req.data;
    }


  ngOnInit() {
    setTimeout(this.simularCargaMenu,1000);
    this.cargarRegion();
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
