import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/-helper.service';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage implements OnInit {
correo:string="";
cCorreo:string="";
nuevaCont:string="";
repetirCont:string="";
loading:boolean= true;
  constructor(
    private helper:HelperService,
    private router:Router
    
    ) { }
    simularCargaMenu =()=>
    this.loading= false;
  ngOnInit() {
    setTimeout(this.simularCargaMenu,5000);
  }
  async conf(){
    let confirmar= await this.helper.showConfirm("Seguro que quiere que esta sea su nueva contraseña?","Shi","Ño")
    if (confirmar==true){
      this.helper.showAlert("La contraseña ha sido cambiada!","Aceptar")
      this.router.navigateByUrl('login')
    }
  }
}