import {Component, inject} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DateConversionService} from 'ngx-nepali-dualpicker';

@Component({
  selector: 'app-conversion',
	imports: [
		FormsModule,
		ReactiveFormsModule
	],
  templateUrl: './conversion.html',
  styleUrl: './conversion.scss',
})
export class Conversion {

	dateService = inject(DateConversionService);

	// Sample data for pipes
	sampleBSDate = this.dateService.getCurrentBsDate(true);
	sampleADDate = this.dateService.convertBsToAd(this.sampleBSDate, true);

	// Conversion form controls
	bsToAdInput = new FormControl(this.sampleBSDate);
	bsToAdResult: any = '';
	adToBsInput = new FormControl(this.sampleADDate);
	adToBsResult: any = '';

	// Conversion methods
	convertBStoAD() {
		const input = this.bsToAdInput.value;
		if (input) {
			this.bsToAdResult = this.dateService.convertBsToAd(input, true);
		}
	}

	convertADtoBS() {
		const input = this.adToBsInput.value;
		if (input) {
			this.adToBsResult = this.dateService.convertAdToBs(input, true);
		}
	}

	getCurrentBSDate() {
		return this.dateService.getCurrentBsDate(true);
	}

	getCurrentADDate() {
		const today = new Date();
		return today.toISOString().split('T')[0];
	}

	protected readonly Number = Number;
}
