import { Injectable } from '@angular/core';
import { Currency } from './currency';
import { CURRENCIES } from './mock-currencies';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }
	
	getCurrencies(): Observable<Currency[]> {
	  return of(CURRENCIES);
	}
	
	getCurrency(code: string): Observable<Currency> {
	  return of(CURRENCIES.find(currency => currency.code === code));
	}
}
