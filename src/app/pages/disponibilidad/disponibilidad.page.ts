import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private helper:HelperService,
    private  router:Router,
    private storage: StorageAutoService

    ) { }
    simularCargaMenu =()=>
    this.loading= false;

  ngOnInit() {
    setTimeout(this.simularCargaMenu,1000);
  }
  alerta(){

}
async agregarAuto(){
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
  this.router.navigate(['/menu']);
}
}
