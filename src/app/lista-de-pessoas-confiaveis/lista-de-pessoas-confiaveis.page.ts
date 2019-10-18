import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AcoesPessoasConfiaveisComponent } from '../acoes-pessoas-confiaveis/acoes-pessoas-confiaveis.component';

@Component({
  selector: 'app-lista-de-pessoas-confiaveis',
  templateUrl: './lista-de-pessoas-confiaveis.page.html',
  styleUrls: ['./lista-de-pessoas-confiaveis.page.scss'],
})
export class ListaDePessoasConfiaveisPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AcoesPessoasConfiaveisComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ngOnInit() {
  }

  pessoasConfiaveis = [
    {
      nome: "Jorge Silva",
      telefone: "+55 (67) 98109-0424"
    },
    {
      nome: "Davi Alvarenga",
      telefone: "+55 (67) 99196-6088"
    },
    {
      nome: "Stefano dos Santos",
      telefone: "+55 (67) 98137-9808"
    }
  ]
}
