import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as countryAction from './country.action';
import { Country } from './../models/country';
import { CountryService } from '../../core/country.service';

@Injectable()
export class CountryEffects {
  constructor(
    private countryService: CountryService,
    private actions$: Actions
  ) {}

  getCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(countryAction.getAllCountries),
      map((action) => action.payload),
      switchMap((payload) => {
        console.log(payload);
        return this.countryService.getCountries(payload).pipe(
          map((payload: Country[]) =>
            countryAction.getAllCountriesFinishedAction({ payload })
          ),
          catchError((error) => of(countryAction.countriesErrorAction(error)))
        );
      })
    )
  );
}
