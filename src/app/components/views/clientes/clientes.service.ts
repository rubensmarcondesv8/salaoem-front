import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: String = environment.baseUrl;
  constructor(private http:HttpClient) { }

  findAll():Observable<Cliente[]>{
    const url = `${this.baseUrl}/clientes`;
    return this.http.get<Cliente[]>(url);
  }
}
