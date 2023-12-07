import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-configuraciones-inicio',
  templateUrl: './configuraciones-inicio.component.html',
  styleUrls: ['./configuraciones-inicio.component.scss']
})
export class ConfiguracionesInicioComponent implements OnInit {
  menus:any=[];
  menuTemporal: any = [];
  menuModal:any=[];

  constructor(private menuService:MenuService, private modalService:NgbModal) {}

  ngOnInit(): void {
    this.menuService.obtenerMenu().subscribe(
     {
      next: res=>{
        this.menus = [];
        this.menuTemporal = res;
        for(let i = 0; i < this.menuTemporal.length; i++){
          if(this.menuTemporal[i].estado == 'Activo'){
            this.menus.push(this.menuTemporal[i]);
          }
        }
      },
      error: err =>{
        console.log(err);
      }
     }
    );
  }

  editarModal(modal: any, menu: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
    this.menuModal = menu;
  }

  guardarMenu(modal: any){
    const jsonEspecialidad = {
      
    }
    this.menuService.crearMenu(jsonEspecialidad).subscribe(
      {
        next: res=>{
          console.log(res)
          this.modalService.dismissAll();
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }

  actualizarMenu() {
    const jsonActualizarMenu = {
      idMenu : this.menuModal.idMenu,
      nombre : this.menuModal.nombre,
      imagen : this.menuModal.imagen,
      url : this. menuModal.url,
      estado : this.menuModal.estado
    }
    this.menuService.actualizarMenu(jsonActualizarMenu).subscribe(
      {
        next: res=>{
          console.log(res)
          this.modalService.dismissAll();
        },
        error: err =>{
          console.log(err);
        }
      }
    );
  }
  
}

