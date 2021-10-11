import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: String = environment.baseUrl;
  constructor(private http:HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Cliente[]>{
    const url = `${this.baseUrl}/clientes`;
    return this.http.get<Cliente[]>(url);
  }

  create(cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/clientes`;
    return this.http.post<Cliente>(url, cliente);
  }

  mensagem(str: String): void{
      this._snack.open(`${str}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000
      })
  }
}
