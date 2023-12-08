import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-detail-empleado',
  templateUrl: './detail-empleado.component.html',
  styleUrls: ['./detail-empleado.component.scss']
})
export class DetailEmpleadoComponent implements OnInit {
  tabActiva: string = 'infoPersonal';
  empleado: any = [];

  constructor(private empleadosService: EmpleadosService, private empleadoService: EmpleadoService) {
  }

  ngOnInit(): void {
    this.empleadoService.getEmpleadoSeleccionado().subscribe((empleado) => {
      this.empleado = empleado;
    });
    
  }

}
