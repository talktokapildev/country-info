import { CountryEffects } from './store/country.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryRoutingModule } from './country.routes';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { countryReducer } from './store/country.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CountryDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CountryRoutingModule,
    StoreModule.forFeature('world', countryReducer),
    EffectsModule.forFeature([CountryEffects]),
  ],
})
export class CountryModule {}
