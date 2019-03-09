import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrenciesComponent }      from './currencies/currencies.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CurrencyDetailComponent }  from './currency-detail/currency-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CurrencyDetailComponent },
  { path: 'currencies', component: CurrenciesComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}