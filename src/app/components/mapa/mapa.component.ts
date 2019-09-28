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
  markers: Marker[] = [];

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
    this.getLocation()
  }

   getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lat);
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}



interface Marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
}