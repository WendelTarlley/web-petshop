import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { IniciarVendaComponent } from './componentes/iniciar-venda/iniciar-venda.component';

const routes: Routes = [
  {path:'', component: PaginaInicialComponent},
  {path:'iniciar-venda', component: IniciarVendaComponent},
  {path:'sobre', component: SobreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
