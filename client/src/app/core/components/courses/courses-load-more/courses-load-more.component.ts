import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-courses-load-more',
  templateUrl: './courses-load-more.component.html',
  styleUrls: ['./courses-load-more.component.scss']
})
export class CoursesLoadMoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loadMore(e): void {
    e.preventDefault();
    console.log('Request to load more courses');
  }

}
