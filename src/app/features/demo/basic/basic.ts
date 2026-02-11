import { Component } from '@angular/core';
import {DatePickerConfig, NgxNepaliDualpicker} from 'ngx-nepali-dualpicker';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-basic',
	imports: [
		NgxNepaliDualpicker
	],
  templateUrl: './basic.html',
  styleUrl: './basic.scss',
})
export class Basic {
	// Simple BS (Bikram Sambat) date picker
	basicBSConfig: DatePickerConfig = {
		calendarType: 'BS',
		placeholder: 'Select BS Date',
	};

	// Simple AD (Gregorian) date picker
	basicADConfig: DatePickerConfig = {
		calendarType: 'AD',
		placeholder: 'Select AD Date',
	};

	// Form control for reactive forms example
	dateControl = new FormControl('');

	// Date change handler
	onDateChange(date: any) {
		console.log('Date selected:', date);
	}
}
