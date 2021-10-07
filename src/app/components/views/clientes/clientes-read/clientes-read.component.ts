import { Component, OnInit } from '@angular/core';
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
  constructor(private service: ClientesService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.clienteslista = resposta;
    })
  }

}
