import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CatProduto } from './catproduto.model';

@Injectable({
  providedIn: 'root'
})
export class CatprodutoService {
  
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient) { }

  findAll():Observable<CatProduto[]>{
    const url = `${this.baseUrl}/catproduto`;
    return this.http.get<CatProduto[]>(url);
  }
}