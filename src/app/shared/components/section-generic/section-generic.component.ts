import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit{
  //el nombre del titulo lo estamos asignando en tracks component (html) y lo estamos recibiendo en section-generic component (html)
  @Input()
  title: string = '';
  @Input()
  mode:'small' | 'big' = 'big';//solo se aceptan dos valores big o small por defecto es big


  //esta info la estamos recibiendo en tracks component (html) y lo estamos recibiendo en section-generic component (html)
  @Input()
  dataTracks: Array<TrackModel> = []

  constructor() { }

  ngOnInit(): void {

  }

}
