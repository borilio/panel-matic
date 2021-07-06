import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuenta-atras',
  templateUrl: './cuenta-atras.component.html',
  styleUrls: ['./cuenta-atras.component.css']
})
export class CuentaAtrasComponent implements OnInit {

  public chronoRef: any;
  public title: string;
  public time: number;
  public horaInicio: Date;
  public horaFinal: Date;
  public restante: number;
  public tiempoTerminado: boolean;

  constructor(
    private aRoute: ActivatedRoute
    ) {
    this.title = 'Cuenta atrás'; //Title of card
    this.tiempoTerminado = false;
    let tiempoURL = this.aRoute.snapshot.paramMap.get("time"); //Get the param time from url (get time or null)
    //Si no es nulo, lo convertimos a número, y si es nulo, por defecto lo ponemos a 30 min
    if (tiempoURL != null) {
      this.time = Number(tiempoURL);
    } else{
      this.time = 30;
    }

    //Creamos una fecha en el futuro x minutos adelante
    this.horaInicio = new Date();
    this.horaFinal = new Date();
    this.horaFinal.setMinutes(this.horaInicio.getMinutes() + this.time);

    //Restante
    this.restante = 0;
  }

  ngOnInit(): void {
    //Llamamos al método actualizar() cada segundo
    this.chronoRef = setInterval(() => this.actualizar(), 1000);
  }

  private actualizar() {
    this.restante = this.horaFinal.getTime() - Date.now(); //Calculamos los milisegundos que hay entre las fechas inicio y final (que será la actual + el tiempo indicado en la url)
    //Y si llega a negativo (ya ha pasado el tiempo restante)...
    if (this.restante < 0) {
      this.restante = Math.abs(this.restante); //Lo ponemos en positivo para que el pipe haga bien su trabajo
      //Lo ponemos como tiempo terminado. Seguirá mostrando el tiempo, ahora en positivo pero lo mostramos en rojo
      this.tiempoTerminado = true; 
    }
  }

}
