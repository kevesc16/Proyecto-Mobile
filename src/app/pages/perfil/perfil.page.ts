import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario : any;

  constructor(private storage:StorageService,
              private auth:AngularFireAuth) { }

  ngOnInit() {
    this.cargarInfoUsuario();
  }
  async cargarInfoUsuario(){
    var userCorreo=await this.auth.currentUser;
    console.log("Correo de usuario",userCorreo?.email)
    
    this.usuario = (await this.storage.obtenerUsuario()).filter(
      (usuario)=>usuario.correo == userCorreo?.email
      );
    

  }

}
