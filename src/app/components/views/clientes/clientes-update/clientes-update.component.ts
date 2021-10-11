import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../clientes.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.component.html',
  styleUrls: ['./clientes-update.component.css']
})
export class ClientesUpdateComponent implements OnInit {

  cliente: Cliente = {
    idCliente: '',
    nomeCliente: '',
    telefoneCliente: '',
    aniversarioCliente: ''
  }

  constructor(private service: ClientesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cliente.idCliente = this.route.snapshot.paramMap.get('idCliente')!;
    this.findById();
  }

  findById(): void{
    this.service.findById(this.cliente.idCliente!).subscribe((resposta) => {
      this.cliente.nomeCliente = resposta.nomeCliente;
      this.cliente.telefoneCliente = resposta.telefoneCliente;
      this.cliente.aniversarioCliente = resposta.aniversarioCliente;
    })
  }

  update(): void {
    this.service.update(this.cliente).subscribe((resposta) => {
      this.router.navigate(['clientes'])
      this.service.mensagem('Cliente alterado com sucesso!')
    })
  }

  cancel(): void{
    this.router.navigate(['clientes'])
  }

}
