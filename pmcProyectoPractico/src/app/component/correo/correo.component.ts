import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;
  
  constructor() {
    this.correo={
      titulo:"Titulo del Correo",
      cuerpo:"Cuerpo del Correo",
      emisor: "mancina.capab20@triana.salesianos.edu",
      destinatario:"luismi.lopez@salesianos.edu"
    }
   }

  ngOnInit(): void {
  }

}
