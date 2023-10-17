import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario:any;

  constructor( 
    private storage:StorageService,
              private auth:AngularFireAuth
  ) { }

  ngOnInit() {
  this.cargarinfoUser();

  }
  async cargarinfoUser(){
    const user = await this.storage.obtenerUsuario();
    const userFirebaseEmail = await this.auth.currentUser;
    const userFilter = user.filter(e => e.correo == userFirebaseEmail?.email);
    await userFilter[0].nombre;
console.log("infoUser",userFilter[0].nombre);

    console.log("property", this.storage.userCorreo);
    this.usuario = (await this.storage.obtenerUsuario()).filter(e => e.correo == userFirebaseEmail?.email);
    console.log("USUARIO FILTRADO",this.usuario);
    
  }
}
