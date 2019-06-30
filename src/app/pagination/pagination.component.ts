import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  items = [];
  pageOfItems: Array<any>;

  constructor() {}

  ngOnInit() {
    this.items = Array(200)
      .fill(0)
      .map((x, i) => ({
        id: i + 1,
        firstName: `firstName ${i + 1}`,
        lastName: `lastName ${i + 1}`
      }));
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
