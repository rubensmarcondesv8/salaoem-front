import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatservicoReadComponent } from './components/views/catservico/catservico-read/catservico-read.component';
import { CatprodutoReadComponent } from './components/views/catproduto/catproduto-read/catproduto-read.component';
import { CatprofissionalReadComponent } from './components/views/catprofissional/catprofissional-read/catprofissional-read.component';
import { ClientesReadComponent } from './components/views/clientes/clientes-read/clientes-read.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'catservico',
    component:CatservicoReadComponent
  },
  {
    path:'catproduto',
    component:CatprodutoReadComponent
  },
  {
    path:'catprofissional',
    component:CatprofissionalReadComponent
  },
  {
    path:'clientes',
    component:ClientesReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
