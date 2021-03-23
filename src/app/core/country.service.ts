import { Region } from './../country/models/region';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  // regions: Region[] = [
  //   { name: 'Asia', value: 'asia' },
  //   { name: 'Europe', value: 'europe' },
  // ];

  countriesList: any;
  selectedCountry: {};

  private url = 'https://restcountries.eu/rest/v2/region/';

  constructor(private http: HttpClient) {}

  // getRegions() {
  //   return this.regions;
  // }

  getCountries(para) {
    return this.http
      .get(this.url + para)
      .pipe(tap((data) => console.log(data)));
  }
}
