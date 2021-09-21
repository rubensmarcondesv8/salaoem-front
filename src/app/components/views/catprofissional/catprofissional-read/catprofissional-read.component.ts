import { Component, OnInit } from '@angular/core';
import { CatProfissional } from '../catprofissional.model';
import { CatprofissionalService } from '../catprofissional.service';

@Component({
  selector: 'app-catprofissional-read',
  templateUrl: './catprofissional-read.component.html',
  styleUrls: ['./catprofissional-read.component.css']
})
export class CatprofissionalReadComponent implements OnInit {

  catprofissionallista: CatProfissional[] = [];
  displayedColumns: string[] = ['nomeCatProfissional', 'descCatProfissional', 'Profissionais', 'acoes'];
  constructor(private service: CatprofissionalService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.catprofissionallista = resposta;
    })
  }

}
