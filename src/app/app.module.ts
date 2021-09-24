import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { CatservicoReadComponent } from './components/views/catservico/catservico-read/catservico-read.component';
import {MatButtonModule} from '@angular/material/button';
import { CatprodutoReadComponent } from './components/views/catproduto/catproduto-read/catproduto-read.component';
import { CatprofissionalReadComponent } from './components/views/catprofissional/catprofissional-read/catprofissional-read.component';
import { ClientesReadComponent } from './components/views/clientes/clientes-read/clientes-read.component';
import { CatlancamentoReadComponent } from './components/views/catlancamento/catlancamento-read/catlancamento-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CatservicoReadComponent,
    CatprodutoReadComponent,
    CatprofissionalReadComponent,
    ClientesReadComponent,
    CatlancamentoReadComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
