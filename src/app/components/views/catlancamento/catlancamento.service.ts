import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatLancamento } from './catlancamento.model';

@Injectable({
  providedIn: 'root'
})
export class CatlancamentoService {

  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient) { }

  findAll():Observable<CatLancamento[]>{
    const url = `${this.baseUrl}/catlancamento`;
    return this.http.get<CatLancamento[]>(url);
  }
}
