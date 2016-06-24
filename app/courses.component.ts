import {Component} from 'angular2/core';
import {CourseService} from './course.service';
//Component is a decorator (a type of function)
//All decorators need to be prefixed w/@
//This function takes an object {}
@Component({
  selector: 'courses',//<courses> element
  template: `<h2>Courses</h2>
            {{ title }}
            <ul>
              <li *ngFor="#course of courses">
              {{ course }}
              </li>
            </ul>
            `,
  providers: [CourseService]
})
export class CoursesComponent {
  title = "The title of courses page";
  courses;

  constructor (courseService: CourseService) {//pascal case (CourseService)
    this.courses = courseService.getCourses();
  }
}
