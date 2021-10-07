import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesReadComponent } from './components/views/clientes/clientes-read/clientes-read.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
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
