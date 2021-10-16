import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './components/views/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ClientesReadComponent } from './components/views/clientes/clientes-read/clientes-read.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { ClientesCreateComponent } from './components/views/clientes/clientes-create/clientes-create.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { ClientesDeleteComponent } from './components/views/clientes/clientes-delete/clientes-delete.component';
import { ClientesUpdateComponent } from './components/views/clientes/clientes-update/clientes-update.component';
import { ProdutosReadComponent } from './components/views/produtos/produtos-read/produtos-read.component';
import { ProdutosCreateComponent } from './components/views/produtos/produtos-create/produtos-create.component';
import { ProdutosUpdateComponent } from './components/views/produtos/produtos-update/produtos-update.component';
import { ProdutosDeleteComponent } from './components/views/produtos/produtos-delete/produtos-delete.component';
import { ServicosReadComponent } from './components/views/servicos/servicos-read/servicos-read.component';
import { ServicosCreateComponent } from './components/views/servicos/servicos-create/servicos-create.component';
import { ServicosUpdateComponent } from './components/views/servicos/servicos-update/servicos-update.component';
import { ServicosDeleteComponent } from './components/views/servicos/servicos-delete/servicos-delete.component';
import { ProfissionalCreateComponent } from './components/views/profissional/profissional-create/profissional-create.component';
import { ProfissionalReadComponent } from './components/views/profissional/profissional-read/profissional-read.component';
import { ProfissionalUpdateComponent } from './components/views/profissional/profissional-update/profissional-update.component';
import { ProfissionalDeleteComponent } from './components/views/profissional/profissional-delete/profissional-delete.component';
import { ContacorrenteCreateComponent } from './components/views/contacorrente/contacorrente-create/contacorrente-create.component';
import { ContacorrenteReadComponent } from './components/views/contacorrente/contacorrente-read/contacorrente-read.component';
import { ContacorrenteUpdateComponent } from './components/views/contacorrente/contacorrente-update/contacorrente-update.component';
import { ContacorrenteDeleteComponent } from './components/views/contacorrente/contacorrente-delete/contacorrente-delete.component';
import { LancamentosCreateComponent } from './components/views/lancamentos/lancamentos-create/lancamentos-create.component';
import { LancamentosReadComponent } from './components/views/lancamentos/lancamentos-read/lancamentos-read.component';
import { LancamentosUpdateComponent } from './components/views/lancamentos/lancamentos-update/lancamentos-update.component';
import { LancamentosDeleteComponent } from './components/views/lancamentos/lancamentos-delete/lancamentos-delete.component';
import { VendaCreateComponent } from './components/views/venda/venda-create/venda-create.component';
import { VendaReadComponent } from './components/views/venda/venda-read/venda-read.component';
import { VendaUpdateComponent } from './components/views/venda/venda-update/venda-update.component';
import { VendaDeleteComponent } from './components/views/venda/venda-delete/venda-delete.component';
import { ItemvendaCreateComponent } from './components/views/itemvenda/itemvenda-create/itemvenda-create.component';
import { ItemvendaReadComponent } from './components/views/itemvenda/itemvenda-read/itemvenda-read.component';
import { ItemvendaUpdateComponent } from './components/views/itemvenda/itemvenda-update/itemvenda-update.component';
import { ItemvendaDeleteComponent } from './components/views/itemvenda/itemvenda-delete/itemvenda-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ClientesReadComponent,
    MenuComponent,
    ClientesCreateComponent,
    ClientesDeleteComponent,
    ClientesUpdateComponent,
    ProdutosReadComponent,
    ProdutosCreateComponent,
    ProdutosUpdateComponent,
    ProdutosDeleteComponent,
    ServicosReadComponent,
    ServicosCreateComponent,
    ServicosUpdateComponent,
    ServicosDeleteComponent,
    ProfissionalCreateComponent,
    ProfissionalReadComponent,
    ProfissionalUpdateComponent,
    ProfissionalDeleteComponent,
    ContacorrenteCreateComponent,
    ContacorrenteReadComponent,
    ContacorrenteUpdateComponent,
    ContacorrenteDeleteComponent,
    LancamentosCreateComponent,
    LancamentosReadComponent,
    LancamentosUpdateComponent,
    LancamentosDeleteComponent,
    VendaCreateComponent,
    VendaReadComponent,
    VendaUpdateComponent,
    VendaDeleteComponent,
    ItemvendaCreateComponent,
    ItemvendaReadComponent,
    ItemvendaUpdateComponent,
    ItemvendaDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [
              {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
