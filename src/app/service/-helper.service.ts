import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private alertService:AlertController,
    private loadingController:LoadingController,
    private auth:AngularFireAuth
    
    ) { }

  async showAlert(msg:string,title:string){
    var alert= await this.alertService.create({cssClass:"alertClass",
    header:title,
    message:msg,
    buttons:["Aceptar"]})
    await alert.present();
    return alert;
  }
  async showConfirm(msg:string,btn_confrm:string,btn_cancel:string){
    var promise = new Promise <boolean>(async (resolve)=>
    {
      var alert= await this.alertService.create({
      cssClass:"alertClass",
      message:msg,
      buttons:
      [
        {
          text: btn_confrm ,
          handler:()=>{
            resolve(true);
          }

        },
        {
          text:btn_cancel,
          handler:()=>{
            resolve(false);
          }
        }
      ]
    })
    await alert.present();
  
  });
  return promise;
}
async showLoader(msg:string){
  var loader =await  this.loadingController.create({
    cssClass:"loaderCss",
    message:msg,
    translucent:true

  });
  await loader.present();
  return loader;
}

async changePassword(email: string): Promise<void> {
  try {
    return this.auth.sendPasswordResetEmail(email)
    
  } catch (error) {
    console.error('Error updating password:', error);
    // Mostrar un mensaje de error al usuario
  }
} 

}
