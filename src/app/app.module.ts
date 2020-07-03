import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebaseConfig from './firebase';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {Network} from '@ionic-native/network/ngx';
import {Contacts, Contact} from '@ionic-native/contacts';
import { CallNumber} from '@ionic-native/call-number/ngx';
import { SMS} from '@ionic-native/sms/ngx';
import { cordova} from '@ionic-native/core';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
      Geolocation,
      Contact,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      Network,
      CallNumber,
      SMS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
