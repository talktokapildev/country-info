import {
  getAllCountries,
  getAllRegions,
  setSelectedCountry,
} from './../store/country.action';
import { CountryService } from './../../core/country.service';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Region } from '../models/region';
import {
  selectCountries,
  selectedCountry,
  selectRegions,
} from '../store/country.selectors';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  regions: Region[];
  countries: any;
  selectedRegion: any = '';
  //selectedCountry: any;
  allRegions$ = this.store.pipe(select(selectRegions));
  allCountries$ = this.store.pipe(select(selectCountries));
  selectedCountry$ = this.store.pipe(select(selectedCountry));
  constructor(
    private countryService: CountryService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    //this.store.dispatch(getAllRegions());
    //console.log(this.allRegions$);
  }

  OnRegionSelect(para) {
    this.selectedRegion = para;
    console.log(para, this.selectedRegion);
    this.store.dispatch(getAllCountries({ payload: this.selectedRegion }));
  }

  OnCountrySelect(countryObj) {
    // this.selectedRegion = para;
    // console.log(para, this.selectedRegion);
    console.log(countryObj);
    this.store.dispatch(setSelectedCountry({ payload: countryObj }));
  }
}
