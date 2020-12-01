// Import base modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import components
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses/courses-list/courses-list-item/courses-list-item.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesSearchComponent } from './components/courses/courses-search/courses-search.component';
import { CoursesAddComponent } from './components/courses/courses-add/courses-add.component';
import { CoursesLoadMoreComponent } from './components/courses/courses-load-more/courses-load-more.component';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesComponent,
    CoursesSearchComponent,
    CoursesAddComponent,
    CoursesLoadMoreComponent
  ],
  exports: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class CoreModule { }
