import {Component} from 'angular2/core';
import {AuthorService} from './author.service';
//Component is a decorator (a type of function)
//All decorators need to be prefixed w/@
//This function takes an object {}
@Component({
  selector: 'authors',//<authors> element
  template: `<h2>Authors</h2>
            {{ title }}
            <ul>
              <li *ngFor="#author of authors">
              {{ author }}
              </li>
            </ul>
            `,
  providers: [AuthorService]
})
export class AuthorsComponent {
  title = "The title of the authors page";
  authors;

  constructor (authorService: AuthorService) {//pascal case
    this.authors = authorService.getAuthors();
  }
}
