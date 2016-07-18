import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';
//Component is a decorator (a type of function)
//All decorators need to be prefixed w/@
//This function takes an object {}
@Component({
  selector: 'courses',//<courses> element
  template: `<h2>Courses</h2>
            {{ title }}
            <input type="text" autoGrow />
            <ul>
              <li *ngFor="#course of courses">
              {{ course }}
              </li>
            </ul>
            `,
  providers: [CourseService],
  directives: [AutoGrowDirective]
})
export class CoursesComponent {
  title = "The title of courses page";
  courses;

  constructor (courseService: CourseService) {//courseService is of type CourseService (typescript syntax)
    this.courses = courseService.getCourses();
  }
}
