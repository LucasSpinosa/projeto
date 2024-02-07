import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/models/receita.model';
import { ReceitaService } from 'src/services/receita.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {
  public receitas!: Receita[];

  constructor( private receitaService: ReceitaService) { }

  ngOnInit(): void {
    this.receitaService.listar().subscribe(receitas => {
      this.receitas = receitas;
      console.log(receitas)
    })
  }

}