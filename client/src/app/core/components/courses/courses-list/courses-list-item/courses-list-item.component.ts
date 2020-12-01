import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'vc-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {

  @Input() course: Course;

  convertDuration(duration): string {
    let h: any = Math.floor(duration / 60);
    let m: any = duration % 60;
    m = m < 10 ? '0' + m : m;
    return `${h}h ${m} min`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
