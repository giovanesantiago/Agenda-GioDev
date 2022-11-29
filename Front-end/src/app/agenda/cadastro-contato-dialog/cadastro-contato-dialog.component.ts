import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Agenda } from '../model/agenda';
import { AgendaService } from '../service/agenda.service';

@Component({
  selector: 'app-cadastro-contato-dialog',
  templateUrl: './cadastro-contato-dialog.component.html',
  styleUrls: ['./cadastro-contato-dialog.component.css']
})
export class CadastroContatoDialogComponent {

  newNome: string = "";
  newTelefone: string = "";
  newContato: Agenda | undefined;
  
  constructor(
    public dialogRef: MatDialogRef<CadastroContatoDialogComponent>,
    private agendaService:AgendaService
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  addContato() {
    this.newContato = { "nome": this.newNome , "telefone": this.newTelefone};
    this.agendaService.addContato(this.newContato).subscribe(element => console.log(element)); 
    this.dialogRef.close();   
  }
}
