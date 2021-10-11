import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../clientes.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-delete',
  templateUrl: './clientes-delete.component.html',
  styleUrls: ['./clientes-delete.component.css']
})
export class ClientesDeleteComponent implements OnInit {

  cliente: Cliente = {
    idCliente: '',
    nomeCliente:'',
    telefoneCliente:'',
    aniversarioCliente:''
  }

  constructor(private service: ClientesService, private route: ActivatedRoute, private router: Router) { }

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

  delete(): void{
    this.service.delete(this.cliente.idCliente!).subscribe((resposta) => {
      this.router.navigate(['clientes'])
      this.service.mensagem('Cliente excluído com sucesso!')
    })
  }

  cancel(): void{
    this.router.navigate(['clientes'])
  }
}
