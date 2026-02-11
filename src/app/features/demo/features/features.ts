import { Component } from '@angular/core';
import {DatePickerConfig, NgxNepaliDualpicker} from "ngx-nepali-dualpicker";

@Component({
  selector: 'app-features',
    imports: [
        NgxNepaliDualpicker
    ],
  templateUrl: './features.html',
  styleUrl: './features.scss',
})
export class Features {
// Auto-convert between BS and AD
	autoConvertConfig: DatePickerConfig = {
		calendarType: 'BS',
		autoConvert: true,
		placeholder: 'Auto-converts BS ↔ AD',
	};

	// Manual text input
	manualInputConfig: DatePickerConfig = {
		allowManualInput: true,
		displayFormat: 'yyyy-MM-dd',
		placeholder: 'Type date or pick from calendar',
	};

	// Toggle between modes
	modeToggleConfig: DatePickerConfig = {
		allowModeToggle: true,
		mode: 'single',
		placeholder: 'Switch modes on the fly',
	};

	// Inline calendar (always visible)
	inlineConfig: DatePickerConfig = {
		inline: true,
		showTodayButton: true,
	};

	withButtonsConfig: DatePickerConfig = {
		showClearButton: true,
		showTodayButton: true,
		placeholder: 'With Clear & Today buttons',
	};

}
