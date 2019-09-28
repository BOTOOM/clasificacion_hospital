import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  epss: any[] = [
    { Nombre: "Sanitas", Id: 1},
    { Nombre: "Cafesalud", Id: 2 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
