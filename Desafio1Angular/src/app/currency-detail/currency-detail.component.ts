import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../currency';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CurrencyService }  from '../currency.service';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})
export class CurrencyDetailComponent implements OnInit {

	@Input() currency: Currency;

	constructor(
	  private route: ActivatedRoute,
	  private currencyService: CurrencyService,
	  private location: Location
	) {}

  ngOnInit(): void {
		this.getCurrency();
  }
	
	getCurrency(): void {
	  const code = this.route.snapshot.paramMap.get('code');
	  this.currencyService.getCurrency(code)
	    .subscribe(currency => this.currency = currency);
	}

	goBack(): void {
	  this.location.back();
	}

}
