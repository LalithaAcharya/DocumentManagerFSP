import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Document } from './model/document';
import { DetailsDocument } from './model/documentDetail';
import { FindDocument } from './model/findDocument'
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private http:HttpClient) { }

  headers = new HttpHeaders().set('content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }

  url: string ="http://localhost:3000/posts/";

  getDocumentDetails() {
    return this.http.get<DetailsDocument[]>(this.url);
  }

  getUpdateDocumentDetails(id: number): Observable<DetailsDocument> {
    const url = `${this.url}/${id}`;
    return this.http.get<DetailsDocument>(url, this.httpOptions)
  }

  updateDocumentDetails(documents: FindDocument): Observable<DetailsDocument> {
    const url = `${this.url}/${documents.id}`;
    return this.http.put<DetailsDocument>(url, documents, this.httpOptions).pipe(
      map(() => documents)
    )
  }

}
