import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuraciones-inicio',
  templateUrl: './configuraciones-inicio.component.html',
  styleUrls: ['./configuraciones-inicio.component.scss']
})
export class ConfiguracionesInicioComponent implements OnInit {
  menus:any=[];
  menuModal:any=[];

  registroMenu = new FormGroup({
    nombre: new FormControl('', Validators.required),
    imagen : new FormControl(''),
    url : new FormControl(''),
    estado: new FormControl('', Validators.required),
  });

  constructor(private menuService:MenuService, private modalService:NgbModal) {}

  ngOnInit(): void {
   this.cargarTabla();
  }

  get obt(){
    return this.registroMenu.controls;
  }

  cargarTabla() {
    this.menuService.obtenerMenu().subscribe({
      next: (res) => {
        this.menus = res.reverse();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editarModal(modal: any, menu: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
    this.menuModal = menu;
  }

  guardarModal(modal: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
  }

  modalDelete(menu: any){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3e81e3',
      cancelButtonColor: '#D72E2E',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.menuService.eliminarMenu(menu).subscribe(
          {
            next: res=>{
              console.log(res)
              this.cargarTabla();
            },
            error: err =>{
              console.log(err);
            }
          }
        )
        Swal.fire({
          title: 'Eliminado',
          text: 'El registro ha sido eliminado',
          icon: 'success',
          customClass: {confirmButton: 'kz-button-blue'},
        });
      }
    });
  }

  guardarMenu(){
    const jsonMenu = {
      nombre : this.registroMenu.controls['nombre'].value,
      imagen : this.registroMenu.controls['imagen'].value,
      url : this.registroMenu.controls['url'].value,
      estado : this.registroMenu.controls['estado'].value
    }
    this.menuService.crearMenu(jsonMenu).subscribe(
      {
        next: res=>{
          console.log(res)
          this.modalService.dismissAll();
          this.cargarTabla();
          this.registroMenu.reset();
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

