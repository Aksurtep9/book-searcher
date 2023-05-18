import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://openlibrary.org/';

  constructor(private httpClient: HttpClient) { }

  async searchBooks(searchTerm: string) {
    const url = `${this.apiUrl}search.json?q=${encodeURIComponent(searchTerm)}`;
    return await this.httpClient.get(url);
  }

  //getBook(isbn: string): Promise<any> {
  getBook(isbn: string) {
    const url = `${this.apiUrl}api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`;
    //return axios.get(url);
  }
}