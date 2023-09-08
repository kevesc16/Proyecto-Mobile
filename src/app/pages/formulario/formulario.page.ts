import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/-helper.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  origen:string='';
  destino:string='';
  costo:string='';
  loading:boolean= true;

  constructor(
    private router:Router,
    private helper:HelperService
  ) { }
  simularCargaMenu =()=>
  this.loading= false;

  ngOnInit() {
    setTimeout(this.simularCargaMenu,1500);
  }
async alerta(){
  let confirmar= await this.helper.showConfirm("Desea confirmar el viaje?","Shi","Ño")
  if(confirmar== true){
    this.helper.showAlert("UberFruna encontrado!","Aceptar")
    this.router.navigateByUrl('login')
  }
}

}
