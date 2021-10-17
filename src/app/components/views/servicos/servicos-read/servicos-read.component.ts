import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from '../servicos.model';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-servicos-read',
  templateUrl: './servicos-read.component.html',
  styleUrls: ['./servicos-read.component.css']
})
export class ServicosReadComponent implements OnInit {

  servicolista: Servico[] = []
  displayedColumns: String[] = ['categoriaServico', 'nomeServico', 'descrServico', 'precoBaseServico', 'comissaoSalao', 'acoes']
  constructor(private service: ServicosService, private router: Router) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll(){
    this.service.findAll().subscribe(resposta =>{
      this.servicolista = resposta;
    })
  }

  irParaServicosCreate(){
    this.router.navigate(["servicos/create"]);

  }
}
