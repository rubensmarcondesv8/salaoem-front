import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Produto } from "./produtos.model";

@Injectable({
  providedIn: "root",
})
export class ProdutosService {
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Produto[]> {
    const url = `${this.baseUrl}/produto`;
    return this.http.get<Produto[]>(url);
  }

  findById(idProduto: String): Observable<Produto>{
    const url = `${this.baseUrl}/produto/${idProduto}`
    return this.http.get<Produto>(url)
  }

  create(produto: Produto): Observable<Produto>{
    const url = `${this.baseUrl}/produto`;
    return this.http.post<Produto>(url, produto);
  }

  delete(idProduto: String): Observable<void>{
    const url = `${this.baseUrl}/produto/${idProduto}`
    return this.http.delete<void>(url);
  }

  update(produto: Produto): Observable<void>{
    const url = `${this.baseUrl}/produto/${produto.idProduto}`
    return this.http.put<void>(url, produto);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
