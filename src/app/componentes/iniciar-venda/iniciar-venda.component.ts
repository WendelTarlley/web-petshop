import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-iniciar-venda',
  templateUrl: './iniciar-venda.component.html',
  styleUrls: ['./iniciar-venda.component.scss']
})
export class IniciarVendaComponent implements OnInit {
  results: string[] = [];

  clientePreenchido:boolean = false;
  novoCliente:boolean = false;
  formCliente: FormGroup
  constructor( private fb:FormBuilder){

    this.formCliente = this.fb.group({
      nome: new FormControl(),
      telefone: new FormControl(),
      endereco: new FormGroup({
        cep: new FormControl(),
        tipoLogradouro: new FormControl(),
        nomeLogradouro: new FormControl(),
        numero: new FormControl(),
        bairro: new FormControl(),
        municipio: new FormControl(),
        uf: new FormControl()
      })
    })
  }
  
  ngOnInit() {
  }


  receberCliente(cliente:any){
    this.formCliente = cliente
    this.clientePreenchido = true;
  }
  receberEndereco(cliente:any){
    console.log(
      'get endereço',cliente
    )
  }
}
