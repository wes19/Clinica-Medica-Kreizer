import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  menus:any=[];

  constructor(private menuService:MenuService) {}

  ngOnInit(): void {
    this.menuService.obtenerMenu().subscribe(
      res=>{
        this.menus = res;
      },
      error=>console.log(error)
    )
  }

}
