import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AcoesPessoasConfiaveisComponent } from './acoes-pessoas-confiaveis/acoes-pessoas-confiaveis.component';
import { AppRoutingModule } from './app-routing.module';

import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { SMS } from '@ionic-native/sms/ngx';

@NgModule({
  declarations: [AppComponent, AcoesPessoasConfiaveisComponent],
  entryComponents: [AcoesPessoasConfiaveisComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    SMS,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
