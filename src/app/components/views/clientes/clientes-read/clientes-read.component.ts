import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../clientes.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.css']
})
export class ClientesReadComponent implements OnInit {
  clienteslista: Cliente[] = [];
  displayedColumns: string[] = ['nomeCliente', 'telefoneCliente', 'aniversarioCliente', 'acoes'];
  constructor(private service: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.clienteslista = resposta;
    })
  }

  irParaClientesCreate(){
    this.router.navigate(["clientes/create"]);
  }

}
