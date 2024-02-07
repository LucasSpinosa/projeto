import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { ReceitasComponent } from './views/receitas/receitas.component';
import { ReceitaInfoComponent } from './views/receita-info/receita-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReceitasComponent,
    ReceitaInfoComponent,
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
