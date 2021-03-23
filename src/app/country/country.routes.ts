import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryDetailComponent } from './country-detail/country-detail.component';

const routes: Routes = [{ path: '', component: CountryDetailComponent }];

// export const CountryRoutes = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
