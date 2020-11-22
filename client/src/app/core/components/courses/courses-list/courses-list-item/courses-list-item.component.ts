import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vc-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {

  @Input()
  public item: String;

  constructor() { }

  ngOnInit(): void {
  }

}
