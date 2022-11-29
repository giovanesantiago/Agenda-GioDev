import { Component, Inject, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Agenda } from '../model/agenda';
import { AgendaService } from '../service/agenda.service';
import {MatDialog} from  '@angular/material/dialog' ;
import { CadastroContatoDialogComponent } from '../cadastro-contato-dialog/cadastro-contato-dialog.component';


@Component({
  selector: 'app-agenda-component',
  templateUrl: './agenda-component.component.html',
  styleUrls: ['./agenda-component.component.css']
})
export class AgendaComponentComponent implements OnInit{

  listaAgenda: Agenda[] = [];
  // Pesquisa
  pesquisa: string = "";
  contatoPesquisa: Agenda | undefined;
  
  // Delete
  nomeDelete: String = "";


  constructor(
    private agendaService:AgendaService,
    public dialog:MatDialog
  ) {}


  ngOnInit(): void {
    this.agendaService.listarAgenda().subscribe(element => {this.listaAgenda = element});
  }

  procurarContato() {
    this.agendaService.pesquisarContato(this.pesquisa).subscribe(element => {this.contatoPesquisa = element});
    console.log(this.contatoPesquisa);
  }

  addContato(): void {
    const dialogRef = this.dialog.open(CadastroContatoDialogComponent, {
      width: '250px'
      /* data: {name: this.name, animal: this.animal} */
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  
  deleteContato() {
    if(this.contatoPesquisa?.nome != null) {
        this.nomeDelete = this.contatoPesquisa.nome;
    }
    this.agendaService.deleteContato(this.nomeDelete).subscribe(element => console.log(element))
    console.log(this.nomeDelete);
    this.contatoPesquisa = undefined;
    location.reload();

  }



  // Caixa de cadastro
   
    
}
