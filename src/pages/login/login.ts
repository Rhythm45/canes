import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { HomePage } from '../home/home';
import { ComprasPage } from '../compras/compras';
import { DireccionamientoPage } from '../direccionamiento/direccionamiento';

import{ ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  nombre:any;
  pass:any;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {

  }
  enviarDatos(){


    let nombre= this.nombre;
    let pass= this.pass;

    if(this.nombre=="carlos"&& this.pass=="123")
    {
      this.navCtrl.push(DireccionamientoPage,  {
        nom : nombre,
        eda: pass
  
  
        
  
    });

    }
    else {


      let toast = this.toastCtrl.create({
      
        message: 'Datos incorrectos',
        duration: 2000,
        position: 'middle'
         });
         
       
         toast.present();
        
    }
   

    

 

}

}
