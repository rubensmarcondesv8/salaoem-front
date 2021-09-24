import { Component, OnInit } from '@angular/core';
import { CatLancamento } from '../catlancamento.model';
import { CatlancamentoService } from '../catlancamento.service';

@Component({
  selector: 'app-catlancamento-read',
  templateUrl: './catlancamento-read.component.html',
  styleUrls: ['./catlancamento-read.component.css']
})
export class CatlancamentoReadComponent implements OnInit {

  catlancamentolista: CatLancamento[] = [];
  displayedColumns: string[] = ['tipoLancamento', 'descrLancamento', 'Lançamentos', 'acoes'];
  constructor(private service:CatlancamentoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.catlancamentolista = resposta;
    })
  }

}
