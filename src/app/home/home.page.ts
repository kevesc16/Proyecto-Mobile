import { Component } from '@angular/core';
import { HelperService } from '../service/-helper.service';
import { Router } from '@angular/router';
import { AnimationController, IonCard, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private animation!: Animation;

  constructor(
    private router:Router,
    private helper:HelperService,
    private animationController:AnimationController,
    private navCrtl: NavController
  ) {}
  goBack() {
    this.navCrtl.back();
  }

  play(){
    this.animation.play();
  }
    pause() {
      this.animation.pause();
    }

    stop() {
      this.animation.finish ();
    }
    ngAfterViewInit() {
      this.animationController
        .create()
        .addElement(document.querySelectorAll("ion-card"))
        .duration(1500)
        .iterations(Infinity)
        .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
        .fromTo('opacity', '1', '0.2');
    }
  ngOninit(){

  }

}
