import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produtos.model';
import { ProdutosService } from '../produtos.service';

interface categoriaProduto{
  value: String;
  viewValue: String;
}

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.css']
})
export class ProdutosCreateComponent implements OnInit {
  produto: Produto = {
    nomeProduto: '',
    descProduto:'',
    quantidadeEstoque:'0',
    precoUnitario:'',
    comissaoProduto: '',
    categoriaProduto:''
  }

  categoriaProduto: categoriaProduto[] = [
    {value: 'Shampoo Comum', viewValue: 'Shampoo Comum'},
    {value: 'Condicionador Comum', viewValue: 'Condicionador Comum'}
  ];

  constructor(private service: ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.produto).subscribe((resposta) => {
      this.service.mensagem('Produto criado com sucesso!');
      this.router.navigate(['produtos']);
    })

  }

  cancel(): void{
    this.router.navigate([`produtos`]);
  }

}
