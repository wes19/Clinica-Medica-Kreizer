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
      res=>{
        this.menus = [];
        this.menuTemporal = res;
        for(let i = 0; i < this.menuTemporal.length; i++){
          if(this.menuTemporal[i].estado == 'Activo'){
            this.menus.push(this.menuTemporal[i]);
          }
        }
      },
      error=>console.log(error)
    )
  }

  openModal(modal: any, menu: any): void {
    this.modalService.open(modal, {
      size: 'lg',
      centered: true,
    });
    this.menuModal = menu;
  }
  
}

