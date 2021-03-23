import { CountryState } from './country.state';
import * as countryAction from './country.action';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: CountryState = {
  countries: [],
  regions: [
    { name: 'Asia', value: 'asia' },
    { name: 'Europe', value: 'europe' },
  ],
  loading: false,
  selectedCountry: null,
};

const countryReducerInternal = createReducer(
  initialState,
  on(countryAction.getAllCountries, (state) => ({
    ...state,
    loading: true,
  })),
  on(countryAction.getAllCountriesFinishedAction, (state, { payload }) => ({
    ...state,
    loading: false,
    countries: [...payload],
    selectedCountry: null,
  })),
  on(countryAction.setSelectedCountry, (state, { payload }) => ({
    ...state,
    selectedCountry: state.countries.find((c) => c.alpha3Code === payload),
  }))
);

export function countryReducer(
  state: CountryState | undefined,
  action: Action
): any {
  return countryReducerInternal(state, action);
}
