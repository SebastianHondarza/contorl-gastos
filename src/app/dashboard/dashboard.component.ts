import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Gastos {
  nombre: string;
  costo: number;
  estado: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  gastos: Gastos[] = [
    { nombre: 'Gasto A', costo: 60000, estado: false },
    { nombre: 'Gasto B', costo: 50000, estado: false },
    { nombre: 'Gasto C', costo: 660000, estado: false },
    { nombre: 'Gasto D', costo: 30000, estado: false },
    { nombre: 'Gasto E', costo: 5000, estado: false },
    { nombre: 'Gasto F', costo: 233000, estado: false },
  ];

  // deben tener los mismos nombres que las propiedades del array de objectos: nombre, costo y estado
  displayedColumns: string[] = ['nombre', 'costo', 'estado'];

  getTotal() {
    return this.gastos.map(g => g.costo).reduce((acc, value) => acc + value, 0);
  }

  constructor() { }

  ngOnInit() {
  }

}
