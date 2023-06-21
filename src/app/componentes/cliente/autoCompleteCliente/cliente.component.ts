import { Component, EventEmitter, Input, OnInit, Output,OnChanges, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TabelaExibicaoClientesComponent } from '../tabela-exibicao-clientes/tabela-exibicao-clientes.component';
import { Cliente } from 'src/app/model/Cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit,OnChanges{
  @ViewChild('dynamicComponent', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;


  @Input() formCliente!: FormGroup
  @Output() editarCliente = new EventEmitter()

  clienteSelecionado: Cliente = new Cliente;

  @Input() novoCliente: boolean = false;
  
  ngOnInit() {
  
     this.formCliente.valueChanges.subscribe( value => 
      this.editarCliente.emit(value))
  }
  
  constructor(public dialog: MatDialog,
    private fb:FormBuilder) {
  }


  openDialog() {
    
      const dialogRef = this.dialog.open(TabelaExibicaoClientesComponent);
      dialogRef.afterClosed().subscribe(resutlt =>{this.salvarCliente(resutlt)});
  }

  salvarCliente(selecionado:Cliente){
    this.clienteSelecionado = selecionado
   this.loadForm(selecionado);
   this.editarCliente.emit(this.formCliente)
  }

  displayOption(option: any) {
    if (option !== null)
    return option.nome;
  }

  loadForm(cliente: any) {
    this.formCliente = this.fb.group({
      nome: cliente.nome,
      telefone: cliente.telefone,
      endereco: this.fb.group({
        cep: cliente.endereco.cep,
        tipoLogradouro: cliente.endereco.tipoLogradouro,
        nomeLogradouro: cliente.endereco.nomeLogradouro,
        numero: cliente.endereco.numero,
        bairro: cliente.endereco.bairro,
        municipio: cliente.endereco.municipio,
        uf: cliente.endereco.uf
      })
    });
  }

  ngOnChanges(changes:SimpleChanges){
     console.log(changes)
  }
}
