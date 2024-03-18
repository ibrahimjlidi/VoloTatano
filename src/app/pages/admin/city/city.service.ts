// city.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city.model'; // Define the City interface

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private baseUrl = 'http://localhost:3000/admin/cities'; // Adjust the URL to match your backend API endpoint

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.baseUrl);
  }

}
