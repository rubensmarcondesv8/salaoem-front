import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servico } from './servicos.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Servico[]> {
    const url = `${this.baseUrl}/servico`
    return this.http.get<Servico[]>(url)
  }

  findById(idServico: String): Observable<Servico>{
    const url = `${this.baseUrl}/servico/${idServico}`
    return this.http.get<Servico>(url)
  }

  create(servico: Servico): Observable<Servico>{
    const url = `${this.baseUrl}/servico`
    return this.http.post<Servico>(url, servico)
  }

  delete(idServico: String): Observable<void>{
    const url = `${this.baseUrl}/servico/${idServico}`
    return this.http.delete<void>(url)
  }
  
  update(servico: Servico): Observable<void>{
    const url = `${this.baseUrl}/servico/${servico.idServico}`
    return this.http.put<void>(url, servico)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
      });
  }
}
