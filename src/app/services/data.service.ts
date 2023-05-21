import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from '../models/book.model';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://openlibrary.org/'; //Base URL for the API calls

  constructor(private httpClient: HttpClient) { }

  /**
   * 
   * @param type - Defines which API should be called
   * @param searchTerm - User input for the search phrase
   * @returns - An Observable object of array of the search results
   */
  searchBooks(type: string, searchTerm: string): Observable<Book[]> {
    const url = `${this.apiUrl}search.json?${type}=${encodeURIComponent(searchTerm)}`;
    return this.httpClient.get<Book[]>(url);
  }

  /**
   * 
   * @param key - The indentifier of the Author
   * @returns - An Observable object of the Author
   */
  getAuthor(key: string): Observable<Author>{
    const url = `${this.apiUrl}authors/${key}.json`;
    return this.httpClient.get<Author>(url);
  }
}