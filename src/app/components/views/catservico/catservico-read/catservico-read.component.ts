import { Component, OnInit } from '@angular/core';
import { CatServico } from '../catservico.model';
import { CatservicoService } from '../catservico.service';

@Component({
  selector: 'app-catservico-read',
  templateUrl: './catservico-read.component.html',
  styleUrls: ['./catservico-read.component.css']
})
export class CatservicoReadComponent implements OnInit {

  catservicolista: CatServico[] = [];
  displayedColumns: string[] = ['nomeCatServico', 'descrCatServico', 'Servico', 'acoes'];
  constructor(private service: CatservicoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
        this.catservicolista = resposta;
    })
  }
}
