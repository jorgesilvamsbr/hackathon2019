import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  audiosCapturados: String[];

  constructor(private speechRecognition: SpeechRecognition, private sms: SMS, public toastController: ToastController) {
    this.pedirPermissaoParaOuvir();
    this.comecarAOuvir();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Seu pedido foi enviado!',
      duration: 6000
    });
    toast.present();
  }

  pedirPermissaoParaOuvir(){
    this.speechRecognition.hasPermission()
    .then((possuiPermissao: boolean) => {
      if(!possuiPermissao)
        this.speechRecognition.requestPermission();
    }, (erro)=>{
      console.log(erro);
    });
  }

  comecarAOuvir(){
    let options = {
      language: 'pt-BR',
      showPartial: true,
      match: 1000

    }
    let precisouDeAjuda = false;
    this.speechRecognition.startListening(options)
    .subscribe((audiosCapturados: Array<string>) => {
      this.audiosCapturados = audiosCapturados;
      audiosCapturados.forEach((audio) => {
        if(audio.toLocaleLowerCase().search('socorro') > 0 && audio.toLocaleLowerCase().search('abacaxi') > 0) {
          this.sms.send('67981090424', 'Socorro! Estou sendo agredida pode me ajudar?', {android: {intent: ''}});
          return;
        }
        if(precisouDeAjuda) {
          return;
        }
      })
    });
  }

  pararDeOuvir(){
    this.speechRecognition.stopListening();
  }
}
