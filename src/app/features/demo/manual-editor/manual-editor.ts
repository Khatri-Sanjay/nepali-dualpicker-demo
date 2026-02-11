import {Component, computed, OnInit, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DatePickerConfig, NgxNepaliDualpicker} from "ngx-nepali-dualpicker";
import {DatePickerSchema} from '../../date-picker.schema';

@Component({
	selector: 'app-manual-editor',
	imports: [
		FormsModule,
		NgxNepaliDualpicker
	],
	templateUrl: './manual-editor.html',
	styleUrl: './manual-editor.scss',
})
export class ManualEditor implements OnInit {
	// Manual configuration editor state
	manualConfigText: string = `{
	  "theme": "ocean",
	  "language": "en",
	  "calendarType": "BS",
	  "mode": "single",
	  "showTodayButton": true,
	  "showClearButton": true,
	  "placeholder": "Select Date"
	}`;

	manualConfig = signal<DatePickerConfig>({});
	configError: string = '';
	isValidConfig: boolean = true;

	private configVersion = signal(0);

	protected readonly Number = Number;

	manualDateConfig = computed(() => {
		return this.manualConfig();
	});

	ngOnInit() {
		this.applyManualConfig();
	}

	// Parse and apply manual configuration
	applyManualConfig() {
		try {
			const parsed = JSON.parse(this.manualConfigText);

			DatePickerSchema.parse(parsed);
			this.manualConfigText = JSON.stringify(parsed, null, 2);

			this.manualConfig.set(parsed);
			this.configVersion.update(v => v + 1);

			this.configError = '';
			this.isValidConfig = true;

		} catch (error: any) {
			this.configError = error?.errors?.[0]?.message || error.message;
			this.isValidConfig = false;
		}
	}

	// Reset to default configuration
	resetManualConfig() {
		this.manualConfigText = `{
		  "theme": "ocean",
		  "language": "en",
		  "calendarType": "BS",
		  "mode": "single",
		  "showTodayButton": true,
		  "showClearButton": true,
		  "placeholder": "Select Date"
		}`;
		this.applyManualConfig();
	}

	// Load preset configuration examples
	loadPreset(preset: string) {
		const presets: Record<string, string> = {
			minimal: `{
			  "theme": "light",
			  "language": "en"
			}`,
			complete: `{
			  "theme": "ocean",
			  "language": "en",
			  "calendarType": "BS",
			  "mode": "single",
			  "displayFormat": "yyyy-MM-dd",
			  "placeholder": "Select Date",
			  "showTodayButton": true,
			  "showClearButton": true,
			  "closeOnSelect": true,
			  "allowManualInput": false,
			  "inline": false
			}`,
			range: `{
			  "theme": "dark",
			  "mode": "range",
			  "closeOnSelect": false,
			  "placeholder": "Select Date Range",
			  "showClearButton": true
			}`,
			nepali: `{
			  "theme": "forest",
			  "language": "ne",
			  "calendarType": "BS",
			  "placeholder": "मिति छान्नुहोस्",
			  "showTodayButton": true
			}`,
			custom: `{
			  "theme": "light",
			  "customTheme": {
				"colors": {
				  "primary": "#e63946",
				  "primaryHover": "#d62828",
				  "primaryLight": "#ffebee",
				  "selectedBg": "#e63946",
				  "todayText": "#e63946"
				}
			  },
			  "language": "en",
			  "placeholder": "Custom Theme"
			}`,
			inline: `{
			  "inline": true,
			  "showTodayButton": true,
			  "showClearButton": true,
			  "theme": "purple"
			}`,
			restricted: `{
			  "calendarType": "BS",
			  "minDate": { "year": 2080, "month": 1, "day": 1 },
			  "maxDate": { "year": 2081, "month": 12, "day": 30 },
			  "disabledDaysOfWeek": [0, 6],
			  "placeholder": "Business Days Only"
			}`,
			bsCalendar: `{
			  "calendarType": "BS",
			  "placeholder": "BS datepicker"
			}`,
			adCalendar: `{
			  "calendarType": "AD",
			  "placeholder": "BS datepicker"
			}`,
		};

		this.manualConfigText = presets[preset] || presets['minimal'];
		this.beautifyConfig();
		this.applyManualConfig();
	}

	// Beautify JSON
	beautifyConfig() {
		try {
			const parsed = JSON.parse(this.manualConfigText);
			this.manualConfigText = JSON.stringify(parsed, null, 2);
			this.configError = '';
			this.isValidConfig = true;
		} catch (error: any) {
			this.configError = 'Cannot beautify invalid JSON';
		}
	}

	// Minify JSON
	minifyConfig() {
		try {
			const parsed = JSON.parse(this.manualConfigText);
			this.manualConfigText = JSON.stringify(parsed);
			this.configError = '';
			this.isValidConfig = true;
		} catch (error: any) {
			this.configError = 'Cannot minify invalid JSON';
		}
	}

	getConfigKeys(): string[] {
		return Object.keys(this.manualConfig());
	}

	// Get unique key for forcing re-render
	getConfigKey(): string {
		return `${this.configVersion()}-${JSON.stringify(this.manualConfig())}`;
	}

	getConfigValue(key: string): string {
		const value = (this.manualConfig() as any)[key];
		if (typeof value === 'object' && value !== null) {
			return JSON.stringify(value);
		}
		return String(value);
	}
}
