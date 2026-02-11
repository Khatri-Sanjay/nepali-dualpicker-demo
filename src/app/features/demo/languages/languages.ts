import { Component } from '@angular/core';
import {DatePickerConfig, NgxNepaliDualpicker} from "ngx-nepali-dualpicker";

@Component({
  selector: 'app-languages',
    imports: [
        NgxNepaliDualpicker
    ],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class Languages {
	// English interface
	englishConfig: DatePickerConfig = {
		calendarType: 'BS',
		language: 'en',
		placeholder: 'Select Date (English)',
	};

	// Nepali interface
	nepaliConfig: DatePickerConfig = {
		calendarType: 'BS',
		language: 'ne',
		placeholder: 'मिति छान्नुहोस्',
	};
}
