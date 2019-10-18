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
      nome: "Noberta Alves Santos",
      telefone: "67 99191-8989"
    },
    {
      nome: "Fernando Neto Luís",
      telefone: "67 98989-5544"
    },
    {
      nome: "Gabriela Giovanna Garcia",
      telefone: "67 98454-4152"
    }
  ]
}
