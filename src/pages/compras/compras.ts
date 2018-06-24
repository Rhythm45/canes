import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

/**
 * Generated class for the ComprasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html',
})
export class ComprasPage {

  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public database: AngularFireDatabase
  ) {
    this.tasksRef = this.database.list('compras');
    this.tasks = this.tasksRef.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  createTask(){
    let newTaskModal = this.alertCtrl.create({
      title: 'Registre compra',
      message: "ingrese los datos de producto",
      inputs: [
        {
          name: 'marca',
          placeholder: 'Marca'
          
        }
        ,
        {
          name: 'kilos',
          placeholder: 'Kilos'
          
        }
        ,
        {
          name: 'precio',
          placeholder: 'Precio'
          
        }
        ,

        {
          name: 'fecha',
          placeholder: 'Fecha'

          
        }
        ,
      ]
      
      ,
     
      
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.tasksRef.push({
              marca: data.marca,
              kilos: data.kilos,
              precio: data.precio,
              fecha: data.fecha
              
            });
          }
        }
      ]
    });
    newTaskModal.present( newTaskModal );
  }

  updateTask( task ){
    this.tasksRef.update( task.key,{
      title: task.title,
      done: !task.done
    });
  }

  removeTask( task ){
    console.log( task );
    this.tasksRef.remove( task.key );
  }


 

}


