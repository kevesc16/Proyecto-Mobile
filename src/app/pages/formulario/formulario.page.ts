import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HelperService } from 'src/app/service/-helper.service';
import { StorageAutoService } from 'src/app/service/storage-auto.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  loading:boolean= true;
  autos:any;

  constructor(
    private router:Router,
    private helper:HelperService,
    private storage:StorageAutoService,
    private auth:AngularFireAuth,
    private navCtrl: NavController

  ) { }
  simularCargaMenu =()=>
  this.loading= false;

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    this.cargarInfoAuto();
    setTimeout(this.simularCargaMenu,1500);
  }
  async cargarInfoAuto() {
    const autos = await this.storage.obtenerAuto();
    console.log("Autos:", autos);
    this.autos = autos;
  }

  async alerta(){
    let confirmar= await this.helper.showConfirm("Desea confirmar el viaje?","Si","No")
    if(confirmar== true){
      this.helper.showAlert("Su UberFruna ha sido contactado!","Aceptar")
      this.router.navigate(['menu/:correo']);
    }
  }

}
