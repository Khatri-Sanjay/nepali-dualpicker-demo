import {Component, inject} from '@angular/core';
import {CurrencyFormatterPipe, DateConversionService, NepaliDatePipe} from 'ngx-nepali-dualpicker';

@Component({
  selector: 'app-pipes',
	imports: [
		CurrencyFormatterPipe,
		NepaliDatePipe
	],
  templateUrl: './pipes.html',
  styleUrl: './pipes.scss',
})
export class Pipes {

	dateService = inject(DateConversionService);
	sampleBSDate = this.dateService.getCurrentBsDate(true);
	sampleADDate = this.dateService.convertBsToAd(this.sampleBSDate, true);
	sampleAmount = 12500.5;
}
