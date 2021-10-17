import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from '../servicos.model';
import { ServicosService } from '../servicos.service';

interface categoriaServico{
  value: String;
  viewValue: String;
}

@Component({
  selector: 'app-servicos-update',
  templateUrl: './servicos-update.component.html',
  styleUrls: ['./servicos-update.component.css']
})
export class ServicosUpdateComponent implements OnInit {
  servico: Servico = {
    idServico: '',
    nomeServico: '',
    descrServico: '',
    precoBaseServico: '',
    comissaoSalao: '',
    categoriaServico: ''
  }

  categoriaServico: categoriaServico[] = [
    {value: 'Serviço Cabeleireira Comissionado', viewValue: 'Serviço Cabeleireira Comissionado'},
    {value: 'Serviço Cabeleireira n/ Comissionado', viewValue: 'Serviço Cabeleireira n/ Comissionado'}
  ];

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

  update(): void{
    this.service.update(this.servico).subscribe((resposta) => {
      this.router.navigate(['servicos'])
      this.service.mensagem('Serviço alterado com sucesso!')
    })
  }

  cancel(): void{
    this.router.navigate(['servicos'])
  }


}
