import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-PaginaNoEncontrada',
  templateUrl: './PaginaNoEncontrada.component.html',
  styleUrls: ['./PaginaNoEncontrada.component.css'],
})
export class PaginaNoEncontradaComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}
