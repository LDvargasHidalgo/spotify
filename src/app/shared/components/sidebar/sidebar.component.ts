import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // Objeto que contiene las opciones del menú principal
  mainMenu: {
    defaultOptions: Array<any>; //opciones por defecto
    accessLink: Array<any>; //enlaces de acceso
  } = { defaultOptions: [], accessLink: [] };

  // Arreglo para almacenar opciones personalizadas
  customOptions: Array<any> = [];

  // Constructor del componente que recibe el servicio Router como parámetro
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Configuración de opciones por defecto en el menú principal
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth'],
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history'],
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' },
      },
    ];

    // Configuración de enlaces de acceso en el menú principal
    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
      },
    ];

    // Configuración de opciones personalizadas
    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/'],
      },
      {
        name: 'Mi lista º2',
        router: ['/'],
      },
      {
        name: 'Mi lista º3',
        router: ['/'],
      },
      {
        name: 'Mi lista º4',
        router: ['/'],
      },
    ];
  }

  // Método que se llama al hacer clic en un elemento del menú
  goTo($event: any): void {
    // Navegamos a la ruta '/favorites' con parámetros de consulta específicos
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
      },
    });
    // Imprimimos el evento en la consola
    console.log($event);
  }
}
