import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent implements OnInit {

  public query = '';

  constructor() { }

  ngOnInit(): void {
  }

  find(): void {
    console.log(this.query);
  }

}
