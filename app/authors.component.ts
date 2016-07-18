import {Component} from 'angular2/core';
import {AuthorService} from './author.service';
//Component is a decorator (a type of function)
//All decorators need to be prefixed w/@
//This function takes an object {}
@Component({
  selector: 'authors',//<courses> element
  template: `<h2>Authors</h2>
            {{ title }}
            <ul>
              <li *ngFor="#author of authors">
              {{ author }}
              </li>
            </ul>
            `,
  providers: [AuthorService]//Inject AuthorService into this component
})
export class AuthorsComponent {
  title = "The title of authors page";
  authors;

  constructor (authorService: AuthorService) {//courseService is of type CourseService (typescript syntax)
    this.authors = authorService.getAuthors();
  }
}
