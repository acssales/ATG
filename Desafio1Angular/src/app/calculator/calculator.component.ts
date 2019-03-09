import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../currency';
import { CurrencyService } from '../currency.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
	currencies: Currency[] = [];
	
	@Input() amount: number;
	@Input() fromCurr: Currency;
	@Input() toCurr: Currency;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
		this.amount = 0.0;
		this.getCurrencies();
  }
	
	getResult(): number {
		return this.amount + fromCurr.value + toCurr.value;
	}
	
  getCurrencies(): void {
    this.currencyService.getCurrencies()
      .subscribe(currencies => this.currencies = currencies.slice(0, 5));
  }

}
