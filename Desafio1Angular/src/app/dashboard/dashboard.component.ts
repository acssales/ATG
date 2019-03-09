import { Component, OnInit } from '@angular/core';
import { Currency } from '../currency';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  currencies: Currency[] = [];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrencies();
  }

  getCurrencies(): void {
    this.currencyService.getCurrencies()
      .subscribe(currencies => this.currencies = currencies.slice(1, 5));
  }
}