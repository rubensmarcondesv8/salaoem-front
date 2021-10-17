import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from '../servicos.model';
import { ServicosService } from '../servicos.service';

interface categoriaServico{
  value: String;
  viewValue: String;
}

@Component({
  selector: 'app-servicos-create',
  templateUrl: './servicos-create.component.html',
  styleUrls: ['./servicos-create.component.css']
})
export class ServicosCreateComponent implements OnInit {
  servico: Servico = {
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

  constructor(private service: ServicosService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.servico).subscribe((resosta) => {
      this.service.mensagem('Produto criado com sucesso!')
      this.router.navigate(['servicos']);
    })
  }

  cancel(): void{
    this.router.navigate([`servicos`]);
  }

}
