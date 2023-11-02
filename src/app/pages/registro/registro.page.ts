import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Comuna } from 'src/app/models/comuna';
import { Region } from 'src/app/models/region';
import { HelperService } from 'src/app/service/-helper.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { LocationService } from 'src/app/service/location.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string = '';
  correo: string = '';
  nacionalidad:string='';
  contrasena: string = '';
  loading: boolean = true;

  regiones: Region[] = [];
  comunas: Comuna[] = [];
  nombreRegion: string = '';
  nombreComuna: string = '';
  idRegion: number = 0;
  idComuna: number = 0;
  regionSeleccionado: number = 0;
  comunaSeleccionada: number= 0;

  constructor(
    private helper: HelperService,
    private router: Router,
    private storage: StorageService,
    private auth: AngularFireAuth,
    private location: LocationService,
    private store: FirestoreService
  ) {}
  simularCargaMenu = () => (this.loading = false);

  async cargarRegion() {
    const req = await this.location.getRegion();
    this.regiones = req.data;

  }

  async cargarComuna() {
    const req = await this.location.getComuna(this.regionSeleccionado);
    this.comunas = req.data;
  }

  ngOnInit() {
    this.obtenerRegion;
    setTimeout(this.simularCargaMenu, 1000);
    this.cargarRegion();
  }
  async reg() {
    let confirmar = await this.helper.showConfirm(
      'Desea que sus datos sean guardados de manera permanente?',
      'Shi',
      'Ño'
    );
    if (confirmar == true) {
      this.helper.showAlert('Registro completado!', 'Aceptar');
      this.router.navigateByUrl('login');
    }
  }
  async obtenerRegion()
  {
    this.nombreRegion= this.regiones.filter(e => e.id== this.regionSeleccionado)[0].nombre
    this.nombreComuna= this.comunas.filter(e => e.id== this.comunaSeleccionada)[0].nombre

    console.log('region', this.nombreRegion);
    console.log('Comuna', this.nombreComuna);
  }
  async registro() {
    const loader = await this.helper.showLoader('Cargando');

    try {
      if (this.nombre === '') {
        await loader.dismiss();
        await this.helper.showAlert('Debe ingresar un nombre', 'Error');
        return;
      }
      if (this.contrasena === '') {
        await loader.dismiss();
        await this.helper.showAlert('Debe ingresar una contraseña', 'Error');
        return;
      }
      if (this.correo === '') {
        await loader.dismiss();
        await this.helper.showAlert('Debe ingresar un correo', 'Error');
        return;
      }
      if (this.nombre === '') {
        await loader.dismiss();
        await this.helper.showAlert('Debe ingresar un nombre', 'Error');
        return;
      }
      if (!this.regionSeleccionado) {
        await loader.dismiss();
        await this.helper.showAlert('Debe seleccionar una región', 'Error');
        return;
      }
      if (!this.comunaSeleccionada) {
        await loader.dismiss();
        await this.helper.showAlert('Debe seleccionar una comuna', 'Error');
        return;
      }
      await loader.dismiss();
      await this.obtenerRegion();

      var user = [
        {
          nombre: this.nombre,
          correo: this.correo,
          nacionalidad:this.nacionalidad,
          region: this.nombreRegion,
          comuna: this.nombreComuna
        }
      ];

      await loader.dismiss();
      await this.auth.createUserWithEmailAndPassword(
        this.correo,
        this.contrasena
      );
      await this.storage.agregarUsuario(user);
      await this.helper.showAlert(
        'Usuario registrado corretamente',
        'Información'
      );
      await this.router.navigateByUrl('login');
      await loader.dismiss();
    } catch (error: any) {
      if (error.code == 'auth/email-already-in-use') {
        await loader.dismiss();
        await this.helper.showAlert('El correo ya esta en uso', 'Error');
      }
      if (error.code == 'auth/invalid-email') {
        await loader.dismiss();
        await this.helper.showAlert('Error en el formato del correo', 'Error');
      }
      if (error.code == 'auth/missing-email') {
        await loader.dismiss();
        await this.helper.showAlert('Debe ingresar un correo', 'Error');
      }
      if (error.code == 'auth/weak-password') {
        await loader.dismiss();
        await this.helper.showAlert(
          'El largo de la contraseña es incorrecto',
          'Error'
        );
      }
      if (error.code == 'auth/missing-password') {
        await loader.dismiss();
        await this.helper.showAlert('Debe ingresar una contraseña', 'Error');
      }
    }

  }
}
