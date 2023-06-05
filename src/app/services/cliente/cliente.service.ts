import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private consultaClientes = 'http://localhost:8082/api-pedidos/clientes/';
  

constructor(private http: HttpClient) { }

  buscarCliente(nome:string): Observable<any>{
    return this.http.get(this.consultaClientes+"busca-por-nome/"+nome)
  }
}
