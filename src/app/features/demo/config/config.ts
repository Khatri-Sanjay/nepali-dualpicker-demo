import { Component } from '@angular/core';
import {DatePickerConfig, NgxNepaliDualpicker} from "ngx-nepali-dualpicker";

@Component({
  selector: 'app-config',
    imports: [
        NgxNepaliDualpicker
    ],
  templateUrl: './config.html',
  styleUrl: './config.scss',
})
export class Config {
	// Override theme only - other properties come from global config
	overrideThemeConfig: DatePickerConfig = {
		theme: 'purple',
	};

	// Override multiple properties
	overrideMultipleConfig: DatePickerConfig = {
		language: 'ne',
		mode: 'range',
		closeOnSelect: false,
	};

	// Complete custom configuration
	completeOverrideConfig: DatePickerConfig = {
		theme: 'forest',
		calendarType: 'AD',
		language: 'en',
		mode: 'single',
		inline: false,
		showTodayButton: false,
		showClearButton: false,
		placeholder: 'Fully customized',
	};

}
