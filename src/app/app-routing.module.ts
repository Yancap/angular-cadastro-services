import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { HistoricComponent } from './components/historic/historic.component';

const routes: Routes = [
  {path: "cadastro", component: FormsComponent},
  {path: "historic", component: HistoricComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
