import { Injectable, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CaixaDialogGenericaComponent } from '../componentes/caixa-dialog-generica/caixa-dialog-generica.component';

@Injectable({
  providedIn: 'root'
})
export class CaixaDialogoGenericaService {

  constructor(private dialog: MatDialog) {}



}
