import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';

import { FormsModule } from '@angular/forms';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalculatorComponent } from './calculator/calculator.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    CurrencyDetailComponent,
    DashboardComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
