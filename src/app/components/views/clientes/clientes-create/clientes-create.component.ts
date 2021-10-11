import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../clientes.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {

  cliente: Cliente = {
    nomeCliente: '',
    telefoneCliente: '',
    aniversarioCliente: ''
  }

  constructor(private service: ClientesService, private router: Router ){ }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.cliente).subscribe((resposta) => {
      this.service.mensagem('Cliente criado com sucesso!');
      this.router.navigate(['clientes']);
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
    })

  }

  cancel(): void{
    this.router.navigate([`clientes`]);
  }

}
