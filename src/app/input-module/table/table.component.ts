import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Column {
  key: keyof Data
  label: string
  render?:any;
  style?:NgStyle['ngStyle'];

}

interface Data {
  [key:string]: any
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor() { }

  @Input() columns: Column[] = [];

  @Input() data:Data[] = []

  

}
