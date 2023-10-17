import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
const storageAuto="autoData";
@Injectable({
  providedIn: 'root'
})
export class StorageAutoService {

  constructor(  ) { }

  async getItem(llave:string):Promise<string | null>{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }
  async setItem(llave:string, valor:string){
    await Preferences.set({key:llave,value:valor});
  }
  async obtenerAuto(){
    const storageData = await this.getItem(storageAuto);
    if (storageData == null) {
      return [];
    }

    const data:any[] = JSON.parse(storageData);
    if (data) {
      return data;
    }else{
      return [];
    }
  }
  async agregarAuto(auto:any[]){
    const autos = await this.obtenerAuto();
    for (const i of autos) {
      if (i) {
        auto.push(i);
      }
    }

    this.setItem(storageAuto,JSON.stringify(auto));
  }

}
