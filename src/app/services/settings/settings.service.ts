import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
  }

  //guarda los ajustes en el localStorage
  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
    //console.log('Guardado en el localStorage');
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      //console.log('Cargando de localStorage');

      this.aplicarTema( this.ajustes.tema );

    } else {
     // console.log('Cargando valores por defecto');
      this.aplicarTema( this.ajustes.tema );
    }
  }

  aplicarTema( tema: string ) {

    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url );

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

     //lo guarda en el localStorage
    this.guardarAjustes();
  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
