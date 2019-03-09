import { Component, OnInit } from '@angular/core';
import { Currency } from '../currency';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})

export class CurrenciesComponent implements OnInit {
  currencies: Currency[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrencies();
  }

  getCurrencies(): void {
    this.currencyService.getCurrencies()
    .subscribe(currencies => this.currencies = currencies);
  }
}