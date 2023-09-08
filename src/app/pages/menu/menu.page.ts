import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { Menu } from 'src/app/models/menu';
import { HelperService } from 'src/app/service/-helper.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit, OnDestroy {
  private animation!: Animation;
  
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  menuArray:Menu[]=[]
  loading:boolean= true;
  
  constructor(
  private router: Router,
  private animationCtrl: AnimationController,
  private helper:HelperService
  ) {}
  simularCargaMenu =()=>
  this.loading= false;
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-card"))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }
 
  cargarMenu(){
    var par=456
    this.menuArray.push(
      {
        id:1,
        titulo:"Menu uno",
        url:"/"+par+"/menu-uno",
        icono:"desktop-outline",
        
    },
    {
      id:2,
      titulo:"Menu dos",
      url:"/"+"menu/menu-dos",
      icono:"partly-sunny-outline",
      disabled:true
    }

    )
  }
play(){
  this.animation.play();
}
  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }
  ngOnDestroy(): void {
    console.log('Destruyendo la vista');
  }

  ngOnInit() {
    this.cargarMenu()
    setTimeout(this.simularCargaMenu,2000);
    console.log('inicio del componente');
  }

  ionViewWillEnter() {
    console.log('Entrando a la vista');
  }

  ionViewDidEnter() {
    console.log('Vista cargada');
  }

  ionViewWillLeave() {
    console.log('Abandonando la vista');
  }

  ionViewDidLeave() {
    console.log('Abandonó la vista');
  }

  logOut() {
    this.router.navigateByUrl('login');
  }

  menuUno() {
    var parametroN1 = 123456;
    this.router.navigateByUrl(parametroN1 + '/menu-uno');
  }

  
  
 
}
