import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produtos.model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-read',
  templateUrl: './produtos-read.component.html',
  styleUrls: ['./produtos-read.component.css']
})
export class ProdutosReadComponent implements OnInit {

  produtoslista: Produto[] = [];
  displayedColumns: String[] = ['categoriaProduto', 'nomeProduto', 'descProduto', 'precoUnitario', 'comissaoProduto', 'quantidadeEstoque', 'acoes'];
  constructor(private service: ProdutosService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.produtoslista = resposta;
    })
  }

  irParaProdutosCreate(){
    this.router.navigate(["produtos/create"]);
  }
}
