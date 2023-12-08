import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  menus:any=[];
  menuTemporal:any=[];

  constructor(private menuService:MenuService) {}

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
}
