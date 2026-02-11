import { Component } from '@angular/core';
import {DatePickerConfig, NgxNepaliDualpicker} from "ngx-nepali-dualpicker";

@Component({
  selector: 'app-modes',
    imports: [
        NgxNepaliDualpicker
    ],
  templateUrl: './modes.html',
  styleUrl: './modes.scss',
})
export class Modes {
	// Single date selection
	singleDateConfig: DatePickerConfig = {
		mode: 'single',
		placeholder: 'Pick a Single Date',
	};

	// Date range selection
	dateRangeConfig: DatePickerConfig = {
		mode: 'range',
		placeholder: 'Select Date Range',
		closeOnSelect: false,
	};

	// Multiple dates selection
	multipleDatesConfig: DatePickerConfig = {
		mode: 'multiple',
		placeholder: 'Select Multiple Dates',
		closeOnSelect: false,
		multipleSelectionSettings: {
			maxSelections: 5,
		},
	};
}
