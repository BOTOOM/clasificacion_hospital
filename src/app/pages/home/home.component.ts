import { Component, OnInit } from '@angular/core';
import { SpringService } from '../../services/spring.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectEps: boolean;
  epss: any;
  selectedEps: number;

  constructor(private spring: SpringService) {
    this.getEps();
    this.epss = [
      { Nombre: "Calima", Id: 1},
      { Nombre: "Famisanar", Id: 2}
    ]
  }

  getEps() {
    this.spring.get('obtenerListaEPS').subscribe( dato => {
      console.log(dato);
      this.epss = dato;
    }, (error_service) => {
      console.log(error_service);
    });
  }

  ngOnInit() {
  }

}
