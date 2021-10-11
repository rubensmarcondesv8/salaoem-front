import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesCreateComponent } from './components/views/clientes/clientes-create/clientes-create.component';
import { ClientesDeleteComponent } from './components/views/clientes/clientes-delete/clientes-delete.component';
import { ClientesReadComponent } from './components/views/clientes/clientes-read/clientes-read.component';
import { ClientesUpdateComponent } from './components/views/clientes/clientes-update/clientes-update.component';
import { HomeComponent } from './components/views/home/home.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
