import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightInfoPayload } from '../models';

const apiUrl = 'your-api-url-here';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    token: 'WW91IG11c3QgYmUgdGhlIGN1cmlvdXMgdHlwZS4gIEJyaW5nIHRoaXMgdXAgYXQgdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzICEh',
    candidate: 'Your Name Here',
  });

  constructor(private http: HttpClient) {}

  postFlightInfo(payload: FlightInfoPayload): Observable<any> {
    return this.http.post(apiUrl, payload, { headers: this.headers });
  }
}

