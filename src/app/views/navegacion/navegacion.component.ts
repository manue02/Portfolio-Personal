import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css'],
})
export class NavegacionComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  isResumenRoute() {
    return this.location.path() === '/resumen';
  }
}
