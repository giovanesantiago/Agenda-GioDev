import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponentComponent } from './agenda-component/agenda-component.component';

const routes: Routes = [
  {path:'', component: AgendaComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
