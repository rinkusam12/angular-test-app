import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  @Input() size = 10;
  @Input() total = 100;
  @Input() currentPage = 1;

  @Output() pageChanged = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit(): void {
    this.pages =  Array.from({ length: this.total / this.size}).map((c,i)=>i+1);
  }

  changePage(page: number) {
    console.log(page);
    this.pageChanged.emit(page);
  }

  changePageInput(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    this.changePage(value)
  }
}
