import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public database: AngularFireDatabase
  ) {
    this.tasksRef = this.database.list('Canes');
    this.tasks = this.tasksRef.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  createTask(){
    let newTaskModal = this.alertCtrl.create({
      title: 'Registre su venta',
      message: "ingrese los datos de venta",
      inputs: [
        {
          name: 'raza',
          placeholder: 'Raza'
          
        }
        ,
        {
          name: 'cantidad',
          placeholder: 'Cantidad'
          
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
              raza: data.raza,
              cantidad: data.cantidad,
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
