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
    this.menuService.obtenerMenu().subscribe({
        next: res=> {
          this.menus = [];
          this.menuTemporal = res;
          for(let i = 0; i < this.menuTemporal.length; i++){
            if(this.menuTemporal[i].estado == 1){
              this.menus.push(this.menuTemporal[i]);
            }
          }
        },
        error: err =>{
          console.log(err);
        }
      })
  }
}
