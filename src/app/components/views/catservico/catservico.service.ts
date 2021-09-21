import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CatServico } from './catservico.model';

@Injectable({
  providedIn: 'root'
})
export class CatservicoService {

  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient) { }

  findAll():Observable<CatServico[]>{
    const url = `${this.baseUrl}/catservico`;
    return this.http.get<CatServico[]>(url);
  }
}
