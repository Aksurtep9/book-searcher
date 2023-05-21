import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isDefined } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Author } from 'src/app/models/author.model';
import { BookService } from 'src/app/services/data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: Author | undefined; //The author that is displayed
  coverBaseUrl = 'http://covers.openlibrary.org/a/id/'; //Base URL for the photo of the author

  constructor(private route: ActivatedRoute, private service: BookService) { }

  /**
   * Angular Lifecycle hook
   */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const authorKey = params.get('authorKey');
      console.log(authorKey);
      if (authorKey) {
        this.getAuthor(authorKey);
      }
    });
  }

  /**
   * 
   * @param authorKey - the id of the author 
   * 
   * Loads the author from the service 
   */
  getAuthor(authorKey: string) {
    this.service.getAuthor(authorKey)
      .subscribe(author => this.author = author);
  }


}