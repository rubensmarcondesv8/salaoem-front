import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produtos.model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.css']
})
export class ProdutosDeleteComponent implements OnInit {
  produto: Produto = {
    idProduto: '',
    nomeProduto: '',
    descProduto:'',
    quantidadeEstoque:'',
    precoUnitario:'',
    comissaoProduto: '',
    categoriaProduto:''
  }


  constructor(private service: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.produto.idProduto = this.route.snapshot.paramMap.get('idProduto')!;
    this.findById()
  }

  findById(): void{
    this.service.findById(this.produto.idProduto!).subscribe((resposta) => {
      this.produto.nomeProduto = resposta.nomeProduto
      this.produto.descProduto = resposta.descProduto
      this.produto.comissaoProduto = resposta.comissaoProduto
      this.produto.precoUnitario = resposta.precoUnitario
      this.produto.quantidadeEstoque = resposta.quantidadeEstoque
      this.produto.categoriaProduto = resposta.categoriaProduto
    })
  }

  delete(): void{
    this.service.delete(this.produto.idProduto!).subscribe((resposta) => {
      this.router.navigate(['produtos'])
      this.service.mensagem('Produto excluído com sucesso!')
    })
  }

  cancel(): void{
    this.router.navigate(['produtos'])
  }
}
