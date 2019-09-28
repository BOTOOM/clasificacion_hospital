import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  title = 'My first AGM project';
  lat = 4.66774;
  lng = -74.13200;
  zoom = 8;

  constructor() { }

  ngOnInit() {
  }

}
