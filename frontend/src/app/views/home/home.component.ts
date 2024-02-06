import { Component } from '@angular/core';
import * as ClassicEditor from '../../build/ckeditor';
import '../../build/translations/pt-br.js'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'projeto';
  public Editor: any = ClassicEditor;
}
