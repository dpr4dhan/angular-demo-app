import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UnsplashService {
  private accessKey = 'Gv0wHlmlyw4s1kDSdiYp-3yAJDL5bEOhTdZPy3BxEM0';
  private baseUrl = 'https://api.unsplash.com/search/photos';

  constructor(private http: HttpClient) {
  }

  searchImages(query: string, perPage: number = 10, page: number = 1): Observable<any> {
    let params = new HttpParams()
      .set('query', query)
      .set('per_page', perPage)
      .set('page', page)
      .set('client_id', this.accessKey);

    return this.http.get(this.baseUrl, {params});
  }
}
