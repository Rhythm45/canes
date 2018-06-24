import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ComprasPage } from '../compras/compras';

/**
 * Generated class for the DireccionamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-direccionamiento',
  templateUrl: 'direccionamiento.html',
})
export class DireccionamientoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DireccionamientoPage');
  }

  ventas(){
    
    this.navCtrl.push(HomePage,  {
        
  
  
        
  
    });
}

compras(){
    
  this.navCtrl.push(ComprasPage,  {
      


      

  });
}
}

