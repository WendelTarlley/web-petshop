
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit,OnChanges {

  @Input() formCliente!: FormGroup
  @Input() novoCliente:boolean = false;
  @Output() editarEndereco = new EventEmitter()

  formNewEndereco:any
  
  constructor( private fb:FormBuilder, private cepService:CepService){

    this.formNewEndereco = this.fb.group({

        cep: new FormControl(null,[Validators.minLength(8),Validators.maxLength(8)]),
        tipoLogradouro: new FormControl(),
        nomeLogradouro: new FormControl(),
        numero: new FormControl(),
        bairro: new FormControl(),
        municipio: new FormControl(),
        uf: new FormControl()
      })
  }
  
  ngOnInit() {
    
    if(!this.novoCliente){
      this.formCliente.valueChanges.subscribe(valor =>
        this.editarEndereco.emit(valor))
      }
  }
  
  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
 }
 buscarCep(event:any):void{
//   this.formNewEndereco.cep = event.value
 
//   if(this.formNewEndereco.cep.valid){
//     this.cepService.buscarCep('30330530').subscribe(
//       resultado => console.log(resultado)
//       )
//     }
 }
}
