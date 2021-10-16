import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produtos.model';
import { ProdutosService } from '../produtos.service';

interface categoriaProduto{
  value: String;
  viewValue: String;
}

@Component({
  selector: 'app-produtos-update',
  templateUrl: './produtos-update.component.html',
  styleUrls: ['./produtos-update.component.css']
})
export class ProdutosUpdateComponent implements OnInit {
  produto: Produto = {
    idProduto: '',
    nomeProduto: '',
    descProduto:'',
    quantidadeEstoque:'',
    precoUnitario:'',
    comissaoProduto: '',
    categoriaProduto:''
  }

  categoriaProduto: categoriaProduto[] = [
    {value: 'Shampoo Comum', viewValue: 'Shampoo Comum'},
    {value: 'Condicionador Comum', viewValue: 'Condicionador Comum'}
  ];

  constructor(private service: ProdutosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produto.idProduto = this.route.snapshot.paramMap.get('idProduto')!
    this.findById();
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

  update(): void {
    this.service.update(this.produto).subscribe((resposta) => {
      this.router.navigate(['produtos'])
      this.service.mensagem('Cliente alterado com sucesso!')
    })
  }

  cancel(): void{
    this.router.navigate([`produtos`]);
  }

}
