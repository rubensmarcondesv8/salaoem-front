import { Component, OnInit } from '@angular/core';
import { CatProduto } from '../catproduto.model';
import { CatprodutoService } from '../catproduto.service';

@Component({
  selector: 'app-catproduto-read',
  templateUrl: './catproduto-read.component.html',
  styleUrls: ['./catproduto-read.component.css']
})
export class CatprodutoReadComponent implements OnInit {

  catprodutolista: CatProduto[] = [];
  displayedColumns: string[] = ['nomeCatProduto', 'descCatProduto', 'Produtos', 'acoes'];

  constructor(private service: CatprodutoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.catprodutolista = resposta;
    })
  }
}
