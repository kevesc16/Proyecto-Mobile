import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
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

  ) { }
  simularCargaMenu =()=>
  this.loading= false;

  ngOnInit() {
    this.cargarInfoAuto();
    setTimeout(this.simularCargaMenu,1500);
  }
  /*async cargarInfoAuto(){
    const auto= await this.storage.obtenerAuto();
    const autoFilter = auto.filter(e=> e.patente== auto[0].patente);
    await autoFilter[0].patente;
    console.log("AutoPatente: ",autoFilter[0].patente);
    this.autos=(await this.storage.obtenerAuto()).filter(e=> e.patente== auto[0].patente);
    console.log("Auto filtrado",this.autos);

  }*/
  async cargarInfoAuto() {
    const autos = await this.storage.obtenerAuto();
    console.log("Autos:", autos);
    this.autos = autos;
  }

  async alerta(){
    let confirmar= await this.helper.showConfirm("Desea confirmar el viaje?","Shi","Ño")
    if(confirmar== true){
      this.helper.showAlert("Su UberFruna ha sido contactado!","Aceptar")
      this.router.navigateByUrl('menu')
    }
  }

}
