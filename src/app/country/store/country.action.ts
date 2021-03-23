import { Country } from './../models/country';
import { createAction, props } from '@ngrx/store';

export const getAllCountries = createAction(
  '[countries] get countries',
  props<{ payload: any }>()
);

export const setSelectedCountry = createAction(
  '[countries] set selected country',
  props<{ payload: any }>()
);
export const getAllRegions = createAction('[countries] get regions');
export const getAllCountriesFinishedAction = createAction(
  '[countries] get countries Finished',
  props<{ payload: Country[] }>()
);

export const countriesErrorAction = createAction(
  '[countries] countries Error',
  props<{ payload: any }>()
);
