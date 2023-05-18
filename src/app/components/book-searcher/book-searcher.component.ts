import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/data.service';
import { Book } from 'src/app/models/book.model';
import { Observable } from 'rxjs/internal/Observable';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-searcher',
  templateUrl: './book-searcher.component.html',
  styleUrls: ['./book-searcher.component.css']
})
export class BookSearchComponent implements OnInit {
  searchTerm = '';
  searchResults: Book[] | undefined;
  selectedBook: Book | null = null;
  searchType = 'Title';
  coverBaseUrl = 'http://covers.openlibrary.org/b/id/';
  choosing: boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  startChoosing(){
    this.choosing=true;
  }

  async searchBooks(searchTerm: string) {
     (await this.bookService.searchBooks(searchTerm)).subscribe((data: any) => {
      this.searchResults = data.docs;
    })
  }

  onTitleItemClick(event: MouseEvent){
    event.preventDefault();
    this.searchType = 'Title';
  }
  onTopicItemClick(event: MouseEvent){
    event.preventDefault();
    this.searchType = 'Topic';
  }
  onAuthorItemClick(event: MouseEvent){
    
    event.preventDefault();
    this.searchType = 'Author';
  }
}