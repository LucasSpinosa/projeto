import { Component} from '@angular/core';
import * as ClassicEditor from '../../build/ckeditor';
import '../../build/translations/pt-br.js'

import { ReceitaService } from 'src/services/receita.service';
import  { Router } from '@angular/router'

import { Receita } from 'src/models/receita.model';
import { isFormattedError } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  public Editor: any = ClassicEditor;
  public receita: Receita = {
    titulo: '',
    imagem: '',
    descricao: ''
  };

  constructor(
    private receitaService: ReceitaService,
    private router: Router
  ) {}

  cadastrarReceita(): void{
      this.extractBase64String();

      this.receitaService.cadastrar(this.receita).subscribe(() => {
        this.router.navigate(['/receitas']);
    })
  }

  extractBase64String():void{
    if(this.receita.imagem.includes('figure')){
      const ckeditor = document.querySelector('.input-imagem');
  
      const imagem = ckeditor.querySelector('img');

      this.receita.imagem = imagem.src;
    }
    else{
      alert('Não há imagens')
      this.receita.imagem = '';
    }
  }
}

