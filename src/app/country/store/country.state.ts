import { Region } from '../models/region';
import { Country } from './../models/country';

export interface CountryState {
  countries: Country[];
  loading: boolean;
  selectedCountry: any;
  regions: Region[];
}
