import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponentComponent } from './agenda-component/agenda-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CadastroContatoDialogComponent } from './cadastro-contato-dialog/cadastro-contato-dialog.component';



@NgModule({
  declarations: [
    AgendaComponentComponent,
    CadastroContatoDialogComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule

  ]
})
export class AgendaModule { }
