import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  viaCepUrl = 'https://viacep.com.br/ws/'
  finalUrl = '/json/'
constructor(private http:HttpClient) { }

  buscarCep(cep:string):Observable<any>{
    return this.http.get(this.viaCepUrl+cep+this.finalUrl)
  }
}
