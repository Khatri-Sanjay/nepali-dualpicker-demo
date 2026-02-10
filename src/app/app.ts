import { Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { DatePickerConfig, NgxNepaliDualpicker, DateConversionService, NepaliDatePipe, CurrencyFormatterPipe } from 'ngx-nepali-dualpicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxNepaliDualpicker, NepaliDatePipe, CurrencyFormatterPipe, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  title = 'dualpicker-demo';
  dateService = inject(DateConversionService);

  // Active tab tracking
  activeTab: string = 'basics';

  // Tab definitions
  tabs = [
    {id: 'basics', label: 'Basics', icon: '📅'},
    {id: 'languages', label: 'Languages', icon: '🌐'},
    {id: 'modes', label: 'Modes', icon: '🔢'},
    {id: 'themes', label: 'Themes', icon: '🎨'},
    {id: 'features', label: 'Features', icon: '✨'},
    {id: 'restrictions', label: 'Restrictions', icon: '🚫'},
    {id: 'config', label: 'Global Config', icon: '⚙️'},
    {id: 'manual', label: 'Manual Editor', icon: '🛠️'}, // NEW TAB
    {id: 'pipes', label: 'Pipes', icon: '🔧'},
    {id: 'conversion', label: 'Conversion', icon: '🔄'},
  ];

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

  lightThemeConfig: DatePickerConfig = {
    theme: 'light',
    placeholder: 'Light Theme',
  };

  darkThemeConfig: DatePickerConfig = {
    theme: 'dark',
    placeholder: 'Dark Theme',
  };

  oceanThemeConfig: DatePickerConfig = {
    theme: 'ocean',
    placeholder: 'Ocean Theme',
  };

  forestThemeConfig: DatePickerConfig = {
    theme: 'forest',
    placeholder: 'Forest Theme',
  };

  purpleThemeConfig: DatePickerConfig = {
    theme: 'purple',
    placeholder: 'Purple Theme',
  };

  customThemeConfig: DatePickerConfig = {
    theme: 'light',
    customTheme: {
      colors: {
        primary: '#e63946',
        primaryHover: '#d62828',
        primaryLight: '#ffebee',
        selectedBg: '#e63946',
        todayText: '#e63946',
      },
    },
    placeholder: 'Custom Red Theme',
  };

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

  // Full custom theme example
  fullCustomThemeConfig: DatePickerConfig = {
    customTheme: {
      colors: {
        primary: '#ef4444',
        primaryHover: '#dc2626',
        primaryLight: '#fee2e2',
        secondary: '#fca5a5',
        background: '#1f1f1f',
        surface: '#111111',
        border: '#374151',
        text: '#f9fafb',
        textSecondary: '#d1d5db',
        textDisabled: '#6b7280',
        error: '#f87171',
        success: '#34d399',
        selectedBg: '#ef4444',
        selectedText: '#ffffff',
        hoverBg: '#374151',
        todayText: '#f87171',
        rangeBg: '#b91c1c',
        rangeHoverBg: '#dc2626',
      },
      spacing: {
        containerPadding: '12px',
        dateGap: '5px',
        headerPadding: '12px',
        pickerGap: '8px',
      },
      typography: {
        fontFamily: 'Arial, sans-serif',
        fontSize: {
          base: '14px',
          small: '12px',
          large: '16px',
        },
        fontWeight: {
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
        },
      },
      borderRadius: {
        small: '4px',
        medium: '6px',
        large: '8px',
        full: '9999px',
      },
      shadows: {
        dropdown: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        selected: '0 2px 8px rgba(239, 68, 68, 0.5)',
      },
      transitions: {
        default: 'all 0.2s ease',
        fast: 'all 0.15s ease',
        slow: 'all 0.3s ease',
      },
      dimensions: {
        dateSize: '36px',
        containerWidth: '320px',
        containerMaxHeight: '280px',
        iconSize: '16px',
      },
    },
  };

  // Form control for reactive forms example
  dateControl = new FormControl('');

  // Sample data for pipes
  sampleBSDate = this.dateService.getCurrentBsDate(true);
  sampleADDate = this.dateService.convertBsToAd(this.sampleBSDate, true);
  sampleAmount = 12500.5;

  // Conversion form controls
  bsToAdInput = new FormControl(this.sampleBSDate);
  bsToAdResult: any = '';
  adToBsInput = new FormControl(this.sampleADDate);
  adToBsResult: any = '';

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

  // Change active tab
  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  // Date change handler
  onDateChange(date: any) {
    console.log('Date selected:', date);
  }

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

  // Parse and apply manual configuration
  applyManualConfig() {
    try {
      const parsed = JSON.parse(this.manualConfigText);
      this.manualConfig.set(JSON.parse(JSON.stringify(parsed))); // deep clone
      this.configVersion.update((v) => v + 1);
      this.configError = '';
      this.isValidConfig = true;
    } catch (error: any) {
      this.configError = error.message || 'Invalid JSON format';
      this.isValidConfig = false;
    }
    this.beautifyConfig();
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
