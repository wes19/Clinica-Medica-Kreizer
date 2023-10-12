import { Component} from '@angular/core';

@Component({
  selector: 'app-consulta-paciente',
  templateUrl: './consulta-paciente.component.html',
  styleUrls: ['./consulta-paciente.component.scss']
})
export class ConsultaPacienteComponent {
  expanded: boolean = false;

  toggleInfoContainer() {
    this.expanded = !this.expanded;
  }
}