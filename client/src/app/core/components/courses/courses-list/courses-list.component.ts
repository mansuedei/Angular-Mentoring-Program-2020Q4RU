import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  public items: string[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
    'Course 1', 'Course 2', 'Course 3'
    ];
  }
}

