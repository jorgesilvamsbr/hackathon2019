import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  audiosCapturados: String[];

  constructor(private speechRecognition: SpeechRecognition) {
    this.speechRecognition.hasPermission()
    .then((possuiPermissao: boolean) => {
      if(!possuiPermissao)
        this.speechRecognition.requestPermission();
    });
  }

  comecarAOuvir(){
    let options = {
      language: 'pt-BR'
    }
    this.speechRecognition.startListening(options)
    .subscribe((audiosCapturados: string[]) => {
      this.audiosCapturados = audiosCapturados;
    });
  }

  pararDeOuvir(){
    this.speechRecognition.stopListening();
  }
}
