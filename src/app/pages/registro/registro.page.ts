import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/-helper.service';

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
    private router:Router
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
}
