import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isCollapse = false;
  screenWidth$: Observable<number>;

  constructor() {
    this.screenWidth$ = fromEvent(window, 'resize').pipe(
      startWith(window.innerWidth),
      map(() => window.innerWidth)
    );
    this.screenWidth$.subscribe((width) => {
      this.isCollapse = width < 992;
    });
  }

  toggleSidebar() {
    this.isCollapse = !this.isCollapse;
  }

}
