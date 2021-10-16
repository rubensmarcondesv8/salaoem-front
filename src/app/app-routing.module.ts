import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesCreateComponent } from './components/views/clientes/clientes-create/clientes-create.component';
import { ClientesDeleteComponent } from './components/views/clientes/clientes-delete/clientes-delete.component';
import { ClientesReadComponent } from './components/views/clientes/clientes-read/clientes-read.component';
import { ClientesUpdateComponent } from './components/views/clientes/clientes-update/clientes-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProdutosCreateComponent } from './components/views/produtos/produtos-create/produtos-create.component';
import { ProdutosDeleteComponent } from './components/views/produtos/produtos-delete/produtos-delete.component';
import { ProdutosReadComponent } from './components/views/produtos/produtos-read/produtos-read.component';
import { ProdutosUpdateComponent } from './components/views/produtos/produtos-update/produtos-update.component';
import { ProfissionalCreateComponent } from './components/views/profissional/profissional-create/profissional-create.component';
import { ProfissionalDeleteComponent } from './components/views/profissional/profissional-delete/profissional-delete.component';
import { ProfissionalReadComponent } from './components/views/profissional/profissional-read/profissional-read.component';
import { ProfissionalUpdateComponent } from './components/views/profissional/profissional-update/profissional-update.component';
import { ServicosCreateComponent } from './components/views/servicos/servicos-create/servicos-create.component';
import { ServicosDeleteComponent } from './components/views/servicos/servicos-delete/servicos-delete.component';
import { ServicosReadComponent } from './components/views/servicos/servicos-read/servicos-read.component';
import { ServicosUpdateComponent } from './components/views/servicos/servicos-update/servicos-update.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'clientes',
    component:ClientesReadComponent
  },
  {
    path:'clientes/create',
    component:ClientesCreateComponent
  },
  {
    path:'clientes/delete/:idCliente',
    component:ClientesDeleteComponent
  },
  {
    path:'clientes/update/:idCliente',
    component:ClientesUpdateComponent
  },
  {
    path:'servicos',
    component:ServicosReadComponent
  },
  {
    path:'servicos/create',
    component:ServicosCreateComponent
  },
  {
    path:'servicos/delete/:idServico',
    component:ServicosDeleteComponent
  },
  {
    path:'servicos/update/:idServico',
    component:ServicosUpdateComponent
  },
  {
    path:'profissional',
    component:ProfissionalReadComponent
  },
  {
    path:'profissional/create',
    component:ProfissionalCreateComponent
  },
  {
    path:'profissional/delete/:idProfissional',
    component:ProfissionalDeleteComponent
  },
  {
    path:'profissional/update/:idProfissional',
    component:ProfissionalUpdateComponent
  },
  {
    path:'produtos',
    component:ProdutosReadComponent
  },
  {
    path:'produtos/create',
    component:ProdutosCreateComponent
  },
  {
    path:'produtos/delete/:idProduto',
    component:ProdutosDeleteComponent
  },
  {
    path:'produtos/update/:idProduto',
    component:ProdutosUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
