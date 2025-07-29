import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AmbulanciasServices } from 'src/app/services/ambulancias.service';

@Component({
  selector: 'app-add-ambulancias',
  templateUrl: './add-ambulancias.component.html',
  styleUrls: ['./add-ambulancias.component.scss']
})
export class AddAmbulanciasComponent implements OnInit {

  ambulancias: any=[];
  conductores: any=[];
  tiposAmbulancia: string[] = [
    'Ambulancia Básica',
    'Ambulancia Avanzada',
    'Ambulancia Aérea',
    'Ambulancia de Cuidados Intensivos',
    'Ambulancia de Traslado'
  ];
  
  registroAmbulancia = new FormGroup({
    placa: new FormControl('', Validators.required),
    tipo_ambulancia: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)
  });

  constructor(private ambulanciasService:AmbulanciasServices){}

  ngOnInit(): void {
    this.obtenerConductores();
  }

  get obt(){
    return this.registroAmbulancia.controls;
  }

  obtenerConductores(){
    this.ambulanciasService.obtenerConductores().subscribe({
      next: (res) => {
        this.conductores = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


}
