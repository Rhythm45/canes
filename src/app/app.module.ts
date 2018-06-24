import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ComprasPage } from '../pages/compras/compras';
import { DireccionamientoPage } from '../pages/direccionamiento/direccionamiento';
export const firebaseConfig = {
  apiKey: "AIzaSyCr42ComYB8aMNGYWDs0nJKMYICJHza76U",
    authDomain: "prueba-25fd7.firebaseapp.com",
    databaseURL: "https://prueba-25fd7.firebaseio.com",
    projectId: "prueba-25fd7",
    storageBucket: "prueba-25fd7.appspot.com",
    messagingSenderId: "635810188372"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ComprasPage,
    DireccionamientoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'prueba'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ComprasPage,
    DireccionamientoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
