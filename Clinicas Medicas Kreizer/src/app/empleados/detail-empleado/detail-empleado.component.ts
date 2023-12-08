import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-detail-empleado',
  templateUrl: './detail-empleado.component.html',
  styleUrls: ['./detail-empleado.component.scss']
})
export class DetailEmpleadoComponent implements OnInit {
  tabActiva: string = 'infoPersonal';

  constructor(private empleadosService:EmpleadosService) {}


  ngOnInit(): void {

  }

}