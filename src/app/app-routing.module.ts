import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  { path: 'lista-de-pessoas-confiaveis', loadChildren: './lista-de-pessoas-confiaveis/lista-de-pessoas-confiaveis.module#ListaDePessoasConfiaveisPageModule' },
  { path: 'gatilhos', loadChildren: './gatilhos/gatilhos.module#GatilhosPageModule' },
  { path: 'adicionar-gatilho', loadChildren: './adicionar-gatilho/adicionar-gatilho.module#AdicionarGatilhoPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
