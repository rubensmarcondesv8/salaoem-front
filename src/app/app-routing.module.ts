import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatservicoReadComponent } from './components/views/catservico/catservico-read/catservico-read.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'catservico',
    component:CatservicoReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
