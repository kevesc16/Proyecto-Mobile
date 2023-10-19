import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { StorageService } from '../../service/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
=======
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/service/storage.service';

>>>>>>> main
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
<<<<<<< HEAD
  usuario:any;
  isModalOpen = false;

  constructor( 
    private storage:StorageService,
              private auth:AngularFireAuth
  ) { }

  ngOnInit() {
  this.cargarinfoUser();

  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
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
=======
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
>>>>>>> main
