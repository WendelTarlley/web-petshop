import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-iniciar-venda',
  templateUrl: './iniciar-venda.component.html',
  styleUrls: ['./iniciar-venda.component.scss']
})
export class IniciarVendaComponent implements OnInit {
  searchControl = new FormControl();
  results: string[] = [];


  ngOnInit() {
  }



  constructor(private clienteService:ClienteService) {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(termo => this.clienteService.buscarCliente(termo))
    ).subscribe((dados: any[]) => {
      this.results = dados.map(dado => dado.nome);
    });
  }

}
