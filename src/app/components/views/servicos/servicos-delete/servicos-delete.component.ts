import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from '../servicos.model';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-servicos-delete',
  templateUrl: './servicos-delete.component.html',
  styleUrls: ['./servicos-delete.component.css']
})
export class ServicosDeleteComponent implements OnInit {
  servico: Servico = {
    idServico: '',
    nomeServico: '',
    descrServico: '',
    precoBaseServico: '',
    comissaoSalao: '',
    categoriaServico: ''
  }

  constructor(private service: ServicosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.servico.idServico = this.route.snapshot.paramMap.get('idServico')!
    this.findById()
  }

  findById(): void{
    this.service.findById(this.servico.idServico!).subscribe((resposta) => {
      this.servico.nomeServico = resposta.nomeServico
      this.servico.descrServico = resposta.descrServico
      this.servico.precoBaseServico = resposta.precoBaseServico
      this.servico.comissaoSalao = resposta.comissaoSalao
      this.servico.categoriaServico = resposta.categoriaServico
    })
  }

  delete(): void{
    this.service.delete(this.servico.idServico!).subscribe((resposta) => {
      this.router.navigate(['servicos'])
      this.service.mensagem('Serviço excluído com sucesso!')
    })
  }

  cancel(): void{
    this.router.navigate(['servicos'])
  }

}
