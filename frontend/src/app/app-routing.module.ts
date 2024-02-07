import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ReceitasComponent } from './views/receitas/receitas.component';
import { ReceitaInfoComponent } from './views/receita-info/receita-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'receitas', component: ReceitasComponent },
  { path: 'receita/:id', component: ReceitaInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }