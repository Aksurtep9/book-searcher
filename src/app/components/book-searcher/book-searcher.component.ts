import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/data.service';
import { Book } from 'src/app/models/book.model';
import { Observable } from 'rxjs/internal/Observable';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-searcher',
  templateUrl: './book-searcher.component.html',
  styleUrls: ['./book-searcher.component.css']
})
export class BookSearchComponent implements OnInit {
  searchTerm = ''; //Stores the phrase the user entered to search with
  searchResults: Book[] | undefined; //Array of the searchResult
  selectedBook: Book | null = null; //Represents the selectedBook from the searchResults
  searchType = 'title'; //Controls what api should be called
  searchTypeButtonReference = "Title"; //Display reference to searchType
  coverBaseUrl = 'http://covers.openlibrary.org/b/id/'; //Base URL for the photo of the cover

  constructor(private bookService: BookService,
    private route: ActivatedRoute) { }
  
  /**
  * Angular Lifecycle hook
  */
  ngOnInit(): void {
    this.bookService.searchBooks(
      this.searchType, this.searchTerm
    ).subscribe(searchResult => this.searchResults = searchResult);
  }

  /**
   * 
   * @param searchTerm - The phrase the user entered to search with
   * 
   * Loads the searchResult with the Service
   */
  async searchBooks(searchTerm: string) {
    this.bookService.searchBooks(this.searchType,searchTerm).subscribe((data: any) => {
    this.searchResults = data.docs;
    })
  }

  /**
   * 
   * @param event - Click Event
   * 
   * The default click event reloaded the page, this is why the preventDefault() called
   * 
   * Sets the searchType to 'title' and the text displayed on the dropdown button to 'Title'
   */
  onTitleItemClick(event: MouseEvent){
    event.preventDefault();
    this.searchType = 'title';
    this.searchTypeButtonReference = 'Title';
  }

  /**
   * 
   * @param event - Click Event
   * 
   * The default click event reloaded the page, this is why the preventDefault() called
   * 
   * Sets the searchType to 'subject' and the text displayed on the dropdown button to 'Topic'
   */
  onTopicItemClick(event: MouseEvent){
    event.preventDefault();
    this.searchType = 'subject';
    this.searchTypeButtonReference = 'Topic';
  }

    /**
   * 
   * @param event - Click Event
   * 
   * The default click event reloaded the page, this is why the preventDefault() called
   * 
   * Sets the searchType to 'author' and the text displayed on the dropdown button to 'Author'
   */
  onAuthorItemClick(event: MouseEvent){
    
    event.preventDefault();
    this.searchType = 'author';
    this.searchTypeButtonReference = 'Author';
  }
}