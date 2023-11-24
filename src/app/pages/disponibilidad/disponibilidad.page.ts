import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HelperService } from 'src/app/service/-helper.service';
import { StorageAutoService } from 'src/app/service/storage-auto.service';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.page.html',
  styleUrls: ['./disponibilidad.page.scss'],
})
export class DisponibilidadPage implements OnInit {
costo:string="";
marca:string="";
conductor:string="";
Cpasajeros:string="";
destino:string="";
patente:string="";
loading:boolean= true;
navCtrl: any;

  constructor(
    private helper:HelperService,
    private  router:Router,
    private storage: StorageAutoService,
    private navCrtl: NavController

    ) { }


  simularCargaMenu =()=>
  this.loading= false;

  ngOnInit() {
    setTimeout(this.simularCargaMenu,1000);
  }

  goBack() {
    this.navCrtl.back();
  }

  alerta(){

}
async agregarAuto(){
  try{
    if(this.costo==""){
      this.helper.showAlert("Debe ingresar un costo","Error")
      return;
    }
    if(this.marca==""){
      this.helper.showAlert("Debe ingresar una marca","Error")
      return;
    }
    if(this.conductor==""){
      this.helper.showAlert("Debe ingresar un conductor","Error")
      return;
    }
    if(this.Cpasajeros==""){
      this.helper.showAlert("Debe ingresar una cantidad de pasajeros","Error")
      return;
    }
    if(this.destino==""){
      this.helper.showAlert("Debe ingresar un destino","Error")
      return;
    }
    if(this.patente==""){
      this.helper.showAlert("Debe ingresar una patente","Error")
      return;
    }
    
    const auto=[{
      costo:this.costo,
      conductor:this.conductor,
      marca:this.marca,
      Cpasajeros:this.Cpasajeros,
      destino:this.destino,
      patente:this.patente

    }]
    await this.storage.agregarAuto(auto);
    this.helper.showAlert("Uber Fruna Disponibilizado","Realizado")
    this.router.navigate(['/menu']);}catch{}
}
}
