import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CaixaDialogGenericaComponent } from '../../caixa-dialog-generica/caixa-dialog-generica.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

export interface DialogoData {
  listaClientes:any[]
}

@Component({
  selector: 'app-tabela-exibicao-clientes',
  templateUrl: './tabela-exibicao-clientes.component.html',
  styleUrls: ['./tabela-exibicao-clientes.component.scss']
})
export class TabelaExibicaoClientesComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  dataSource: any;


  constructor(public dialogRef: MatDialogRef<CaixaDialogGenericaComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private clienteService:ClienteService) { }

  ngOnInit() {
    this.clienteService.buscarTodosClientes().subscribe(
      listaClientes => this.dataSource = listaClientes
    )
  }
  

  selecionarCliente(selecionado:any){
    this.dialogRef.close(selecionado);  
  }
}

