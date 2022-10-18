import { Component, Input, OnInit } from '@angular/core';

type Status = "green" | "red" | "gray";

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent implements OnInit {
  
  @Input() statusColor: Status = "gray"; 
  @Input() label: string = ""; 
  constructor() { }

  green: boolean = false
  red: boolean = false
  gray: boolean = false

  ngOnInit(): void {
    this.green = this.statusColor === "green"
    this.gray = this.statusColor === "gray"
    this.red = this.statusColor === "red"
  }

}
