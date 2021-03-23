import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Country } from './../models/country';
import { Region } from './../models/region';
import { CountryState } from './country.state';

export const worldStoreName = 'world';

export const selectWorldStore = createFeatureSelector<CountryState>(
  worldStoreName
);

export const selectLoading = createSelector(
  selectWorldStore,
  (state: CountryState) => state.loading
);

export const selectCountries = createSelector(
  selectWorldStore,
  (state: CountryState) => state.countries
);

export const selectRegions = createSelector(
  selectWorldStore,
  (state: CountryState) => state.regions
);

export const selectedCountry = createSelector(
  selectWorldStore,
  (state: CountryState) => state.selectedCountry
);
