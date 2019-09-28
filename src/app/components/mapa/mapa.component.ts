import { Component, OnInit } from '@angular/core';
import { SpringService } from '../../services/spring.service';

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

  constructor(
    private spring: SpringService,
  ) { 
    // console.info(this.spring.get('obtenerListaEPS'));
    this.prueba()
  }

  prueba() {
      this.spring.get('obtenerListaEPS').subscribe( dato => {
      console.log(dato);
        
    }, (error_service) => {
      console.log(error_service);
    });
  }

  ngOnInit() {
  }

}
