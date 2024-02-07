import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/services/receita.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Receita } from 'src/models/receita.model';

@Component({
  selector: 'app-receita-info',
  templateUrl: './receita-info.component.html',
  styleUrls: ['./receita-info.component.css']
})
export class ReceitaInfoComponent implements OnInit {
  receita!: Receita;

  constructor(
    private receitaService: ReceitaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.receitaService.listarId(id).subscribe(receita => {
      this.receita = receita;
      console.log(receita)
    })
  }

}
