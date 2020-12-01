import { Component, OnInit } from '@angular/core';

import { getMockCoursesData } from '../../../../mocks/courses';

@Component({
  selector: 'vc-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  public courses: any;

  constructor() { }

  async ngOnInit(): Promise<any> {
    this.courses = await this.loadCourses();
  }

  async loadCourses(){
    const data = await this.getCoursesData();
    return data;
  }

  getCoursesData() {
    return new Promise((resolve, reject) => {
        getMockCoursesData().then((data) => {
            if (data) {
                resolve(data);
            } else {
                data = [];
                resolve(data);
            }
        }, reject);
    });
}
}

