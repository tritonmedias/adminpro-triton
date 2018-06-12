import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

  this.regresaObservable().subscribe(
    numero => console.log('Subsc', numero),
    error => console.log('Error en el obs', error),
    () => console.log('Observador termino!')
  );

  }

  ngOnInit() {
  }

  regresaObservable(): Observable<any> {

    //Observable
   return new Observable( (observer: Subscriber<any> ) => {

    let contador = 0;

    let intervalo = setInterval( () => {

      contador ++;

      const salida = {
        valor: contador
      };

     observer.next( salida );

     if ( contador === 3 ) {
       clearInterval( intervalo );
       observer.complete();
     }

    }, 1000 );

   });

  }

}
