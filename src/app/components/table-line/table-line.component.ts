import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent implements OnInit {
  @Input() userId: number;
  @Input() userFirstName: string;
  @Input() userLastName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
