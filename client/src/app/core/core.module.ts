// Import base modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses/courses-list/courses-list-item/courses-list-item.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
    declarations: [CoursesListComponent, CoursesListItemComponent, CoursesComponent],
    exports: [
        CoursesComponent
    ],
    imports: [
        CommonModule
    ],
})
export class CoreModule { }
