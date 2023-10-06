import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/-helper.service';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.page.html',
  styleUrls: ['./disponibilidad.page.scss'],
})
export class DisponibilidadPage implements OnInit {
costo:string="";
conductor:string="";
Cpasajeros:string="";
destino:string="";
patente:string="";
loading:boolean= true;
  constructor(
    private helper:HelperService,
    private  router:Router
    ) { }
    simularCargaMenu =()=>
    this.loading= false;

  ngOnInit() {
    setTimeout(this.simularCargaMenu,1000);
  }
  alerta(){
    this.helper.showAlert("Uber Fruna Disponibilizado","Realizado")
}
}
