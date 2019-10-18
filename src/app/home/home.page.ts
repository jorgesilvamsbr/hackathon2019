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
    this.speechRecognition.startListening(options)
    .subscribe((audiosCapturados: Array<string>) => {
      this.audiosCapturados = audiosCapturados;
      console.log(audiosCapturados);
    });
  }

  pararDeOuvir(){
    this.speechRecognition.stopListening();
  }
}
