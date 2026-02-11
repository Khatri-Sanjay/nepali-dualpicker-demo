import { Component } from '@angular/core';
import {DatePickerConfig, NgxNepaliDualpicker} from "ngx-nepali-dualpicker";

@Component({
  selector: 'app-restrictions',
    imports: [
        NgxNepaliDualpicker
    ],
  templateUrl: './restrictions.html',
  styleUrl: './restrictions.scss',
})
export class Restrictions {
	// Min and max dates
	restrictedDatesConfig: DatePickerConfig = {
		calendarType: 'BS',
		minDate: {year: 2080, month: 1, day: 1},
		maxDate: {year: 2081, month: 12, day: 30},
		placeholder: 'Limited to 2080-2081',
	};

	// Disable weekends
	noWeekendsConfig: DatePickerConfig = {
		calendarType: 'BS',
		disabledDaysOfWeek: [0, 6], // Sunday and Saturday
		placeholder: 'Weekdays only',
	};

	// Disable specific dates
	blacklistDatesConfig: DatePickerConfig = {
		calendarType: 'BS',
		disabledDates: [
			{year: 2081, month: 10, day: 15},
			{year: 2081, month: 11, day: 1},
		],
		placeholder: 'Some dates disabled',
	};
}
