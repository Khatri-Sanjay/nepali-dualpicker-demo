# ngx-nepali-dualpicker – Angular Nepali Date Picker (BS & AD) with Bikram Sambat Conversion, Range & Multiple Selection

[![npm version](https://img.shields.io/npm/v/ngx-nepali-dualpicker.svg?style=flat-square)](https://www.npmjs.com/package/ngx-nepali-dualpicker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
![Angular](https://img.shields.io/badge/Angular-17%2B-red?style=flat-square)

---

👉 **Live Demo:** https://khatri-sanjay.github.io/nepali-dualpicker-demo/

**ngx-nepali-dualpicker is the best Angular date picker for Nepali developers who need BS (Bikram Sambat) and AD calendar support with automatic conversion, range selection, and multiple date selection.**

## 📑 Table of Contents

- [Why Use This Angular Nepali Date Picker?](#-why-use-this-angular-nepali-date-picker)
- [Demo](#-demo--angular-bs--ad-date-picker)
- [Features](#-features-of-ngx-nepali-dualpicker-angular-bs--ad-date-picker)
- [Installation](#-installation)
- [Quick Start](#-quick-start-angular-17-standalone)
- [Usage Examples](#-usage-examples)
- [Selection Modes](#-selection-modes)
- [Language Support](#-language-support)
- [Custom Themes](#-custom-themes-advanced)
- [Date Restrictions](#-date-restrictions)
- [Pipes & Utilities](#-pipes--utilities)
- [Global Configuration](#-global-configuration)
- [FAQ](#-faq)
- [Use Cases](#-use-cases)

---

## Angular Nepali Date Picker for Bikram Sambat (BS) & Gregorian (AD)

**ngx-nepali-dualpicker** is a modern, lightweight, and fully customizable **Angular Nepali Date Picker** that supports both:

* 🗓️ **Bikram Sambat (BS / Nepali Calendar)**
* 📅 **Gregorian (AD / English Calendar)**

It includes built-in **BS ↔ AD date conversion**, range selection, multiple date selection, Angular Reactive Forms integration, multilingual support, and advanced theming.

This Angular BS date picker is ideal for:

* Government portals in Nepal
* Banking & financial systems
* School & university management systems
* HR & payroll software
* Accounting systems
* Nepali SaaS applications

---

## 🚀 Why Use This Angular Nepali Date Picker?

Most Angular date pickers only support the Gregorian (AD) calendar.

**ngx-nepali-dualpicker** is built specifically for Nepali applications that require:

* ✅ Bikram Sambat (BS) calendar support
* ✅ Accurate BS ↔ AD conversion engine
* ✅ Range and multiple date selection
* ✅ Angular 17+ standalone support
* ✅ Reactive Forms compatibility
* ✅ English & Nepali language support
* ✅ Enterprise-ready configuration

---

## 🖼️ Demo – Angular BS ↔ AD Date Picker

Visual preview of:

* BS ↔ AD automatic conversion
* Light, Dark and Custom theme
* Range & multiple selection
* Nepali (नेपाली) language mode

| BS Calendar                                                                                                                             | AD Calendar                                                                                                                        | Nepali (नेपाली) BS Calendar                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Angular Nepali BS Date Picker](https://raw.githubusercontent.com/Khatri-Sanjay/nepali-dualpicker-demo/main/src/assets/images/img.png) | ![Angular AD Date Picker](https://raw.githubusercontent.com/Khatri-Sanjay/nepali-dualpicker-demo/main/src/assets/images/img_1.png) | ![Angular Nepali Language Date Picker](https://raw.githubusercontent.com/Khatri-Sanjay/nepali-dualpicker-demo/main/src/assets/images/img_2.png) |

| Multiple Dates                                                                                                                           | Range Selection                                                                                                                       | Dark Theme                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Angular Multiple Date Picker](https://raw.githubusercontent.com/Khatri-Sanjay/nepali-dualpicker-demo/main/src/assets/images/img_3.png) | ![Angular Range Date Picker](https://raw.githubusercontent.com/Khatri-Sanjay/nepali-dualpicker-demo/main/src/assets/images/img_4.png) | ![Angular Dark Theme Date Picker](https://raw.githubusercontent.com/Khatri-Sanjay/nepali-dualpicker-demo/main/src/assets/images/img_5.png) |

---

## ✨ Features of ngx-nepali-dualpicker (Angular BS & AD Date Picker)

### 🗓️ Dual Calendar Support

* Bikram Sambat (BS / Nepali Calendar)
* Gregorian (AD / English Calendar)

### 🔄 Automatic BS ↔ AD Conversion

* Built-in conversion engine
* Accurate Nepali calendar calculations
* Programmatic conversion via `DateConversionService`

### 📅 Flexible Selection Modes

* Single date selection
* Date range picker
* Multiple date selection

### 🌐 Multi-Language Support

* English (`en`)
* Nepali / नेपाली (`ne`)

### 🎨 Fully Customizable Themes

Built-in themes:

`light`, `dark`, `ocean`, `forest`, `purple`, `rose`

Supports custom colors, typography, spacing, shadows, transitions, and dimensions.

### 🧩 Angular Integration

* Angular Reactive Forms
* Standalone component (Angular 17+)
* Injection token for global config
* Strong TypeScript typing

### ⛔ Advanced Date Restrictions

* Min / Max date limits
* Disabled weekdays
* Disabled specific dates

### 🛠️ Built-in Pipes & Utilities

* `nepaliDate` pipe
* `currencyFormatter` pipe
* `DateConversionService`

---

## 📦 Installation

```bash
	npm install ngx-nepali-dualpicker
	# or
	yarn add ngx-nepali-dualpicker
	# or
	pnpm add ngx-nepali-dualpicker
```

---

## ⚡ Quick Start (Angular 17+ Standalone)

```ts
import { Component } from '@angular/core';
import { NgxNepaliDualpickerComponent } from 'ngx-nepali-dualpicker';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxNepaliDualpickerComponent],
  template: `
    <ngx-nepali-dualpicker
      [config]="bsConfig"
      (dateSelected)="onDateSelected($event)">
    </ngx-nepali-dualpicker>
  `
})
export class HomeComponent {
  bsConfig = {
    calendarType: 'BS',
    placeholder: 'Select BS Date'
  };

  onDateSelected(date: any) {
    console.log(date);
  }
}
```

---

## 📅 Usage Examples

### BS Calendar (Bikram Sambat)

```ts
bsConfig = {
  calendarType: 'BS',
  placeholder: 'Select BS Date'
};
```

### AD Calendar (Gregorian)

```ts
adConfig = {
  calendarType: 'AD',
  placeholder: 'Select AD Date'
};
```

---

## 📅 Selection Modes

```ts
singleDateConfig = { mode: 'single' };

dateRangeConfig = {
  mode: 'range',
  closeOnSelect: false
};

multipleDatesConfig = {
  mode: 'multiple',
  closeOnSelect: false,
  multipleSelectionSettings: { maxSelections: 5 }
};
```

---

## 🌐 Language Support

```ts
englishConfig = { language: 'en' };
nepaliConfig = { language: 'ne' };
```

---

## 🎨 Custom Themes (Advanced)

The DatePicker supports **full custom theming** using the `ThemeApplier` class. You can define **colors, spacing, typography, border radius, shadows, transitions, and dimensions**.

All theme properties are applied as **CSS variables** internally (`--ndp-*`), allowing **dynamic runtime updates**.

### Theme Object Structure

```ts
interface DatePickerTheme {
	colors?: { 
		primary?: string; 
		primaryHover?: string; 
		primaryLight?: string; 
		secondary?: string; 
		background?: string; 
		surface?: string; 
		border?: string; 
		text?: string; 
		textSecondary?: string; 
		textDisabled?: string; 
		error?: string; 
		success?: string; 
		selectedBg?: string; 
		selectedText?: string; 
		hoverBg?: string; 
		todayText?: string; 
		rangeBg?: string; 
		rangeHoverBg?: string 
	};
	spacing?: {
		containerPadding: string; 
		dateGap: string;
		headerPadding: string;
		pickerGap: string 
	};
	typography?: { 
		fontFamily: string; 
		fontSize: { 
			base: string; small: string; large: string 
		};
		fontWeight: {
			normal: number; medium: number; semibold: number; bold: number 
		} 
	};
	borderRadius?: { 
		small: string; medium: string; large: string; full: string 
	};
	shadows?: { 
		dropdown: string; selected: string
	};
	transitions?: { 
		default: string; fast: string; slow: string 
	};
	dimensions?: { 
		dateSize: string; containerWidth: string; containerMaxHeight: string; iconSize: string 
	};
}
```

### Applying a Custom Theme

```ts
import { Component } from '@angular/core';
import { NgxNepaliDualpickerComponent } from 'ngx-nepali-dualpicker';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [NgxNepaliDualpickerComponent],
	template: `
    <ngx-nepali-dualpicker
      [config]="config">
    </ngx-nepali-dualpicker>
  `
})
export class HomeComponent {
	config = {
		customeTheme: DatePickerTheme = {
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
				containerPadding: '14px',
				dateGap: '6px',
				headerPadding: '14px',
				pickerGap: '10px',
			},
			typography: {
				fontFamily: 'Inter, system-ui, sans-serif',
				fontSize: {base: '15px', small: '13px', large: '18px'},
				fontWeight: {normal: 400, medium: 500, semibold: 600, bold: 700},
			},
			borderRadius: {small: '6px', medium: '8px', large: '10px', full: '9999px'},
			shadows: {
				dropdown: '0 25px 30px -5px rgba(0, 0, 0, 0.3), 0 12px 12px -5px rgba(0,0,0,0.2)',
				selected: '0 3px 10px rgba(139, 92, 246, 0.5)',
			},
			transitions: {
				default: 'all 0.25s ease', fast: 'all 0.15s ease', slow: 'all 0.35s ease'
			},
			dimensions: {
				dateSize: '38px', containerWidth: '340px', containerMaxHeight: '300px', iconSize: '18px'
			},
		}
	};
		
}
```
## 🎨 Custom Theme Properties – Where They Are Used

| Property                           | Type   | Default Example                                                                              | Description / Where It Affects UI                                                |
| ---------------------------------- | ------ | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **colors.primary**                 | string | `#3b82f6`                                                                                    | Main color for selected dates, active buttons, and primary accents.              |
| **colors.primaryHover**            | string | `#2563eb`                                                                                    | Hover color for primary elements like buttons and dates.                         |
| **colors.primaryLight**            | string | `#eff6ff`                                                                                    | Lighter shade of primary, used for backgrounds of selected ranges or highlights. |
| **colors.secondary**               | string | `#64748b`                                                                                    | Secondary accent color for less prominent buttons or highlights.                 |
| **colors.background**              | string | `#ffffff`                                                                                    | Overall background of the date picker container.                                 |
| **colors.surface**                 | string | `#f8fafc`                                                                                    | Background for date cells, dropdowns, and cards inside the picker.               |
| **colors.border**                  | string | `#e2e8f0`                                                                                    | Borders of input boxes, date cells, and dropdowns.                               |
| **colors.text**                    | string | `#0f172a`                                                                                    | Main text color for dates, labels, and headings.                                 |
| **colors.textSecondary**           | string | `#64748b`                                                                                    | Secondary text color for disabled text or hints.                                 |
| **colors.textDisabled**            | string | `#cbd5e1`                                                                                    | Disabled text color (unselectable dates).                                        |
| **colors.error**                   | string | `#ef4444`                                                                                    | Error color for invalid selections or messages.                                  |
| **colors.success**                 | string | `#10b981`                                                                                    | Success color for confirmation or valid selections.                              |
| **colors.selectedBg**              | string | `#3b82f6`                                                                                    | Background color of selected date cells.                                         |
| **colors.selectedText**            | string | `#ffffff`                                                                                    | Text color of selected date cells.                                               |
| **colors.hoverBg**                 | string | `#f1f5f9`                                                                                    | Background color when hovering over date cells.                                  |
| **colors.todayText**               | string | `#3b82f6`                                                                                    | Color of the "today" date indicator.                                             |
| **colors.rangeBg**                 | string | `#dbeafe`                                                                                    | Background of dates within a selected range.                                     |
| **colors.rangeHoverBg**            | string | `#bfdbfe`                                                                                    | Background of dates when hovering over a range selection.                        |
| **spacing.containerPadding**       | string | `12px`                                                                                       | Padding inside the main date picker container.                                   |
| **spacing.dateGap**                | string | `4px`                                                                                        | Gap between individual date cells.                                               |
| **spacing.headerPadding**          | string | `12px`                                                                                       | Padding around the month/year header section.                                    |
| **spacing.pickerGap**              | string | `8px`                                                                                        | Gap between multiple picker components (like AD/BS).                             |
| **typography.fontFamily**          | string | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif` | Font family used across the picker.                                              |
| **typography.fontSize.base**       | string | `14px`                                                                                       | Base font size for normal date labels.                                           |
| **typography.fontSize.small**      | string | `12px`                                                                                       | Font size for secondary text like weekdays or disabled dates.                    |
| **typography.fontSize.large**      | string | `16px`                                                                                       | Font size for headers or highlighted text.                                       |
| **typography.fontWeight.normal**   | number | `400`                                                                                        | Normal text weight.                                                              |
| **typography.fontWeight.medium**   | number | `500`                                                                                        | Medium weight for emphasis.                                                      |
| **typography.fontWeight.semibold** | number | `600`                                                                                        | Semi-bold for headings.                                                          |
| **typography.fontWeight.bold**     | number | `700`                                                                                        | Bold weight for selected or highlighted dates.                                   |
| **borderRadius.small**             | string | `4px`                                                                                        | Border radius for small elements like date cells.                                |
| **borderRadius.medium**            | string | `6px`                                                                                        | Medium radius for inputs or dropdowns.                                           |
| **borderRadius.large**             | string | `8px`                                                                                        | Large radius for picker container or panels.                                     |
| **borderRadius.full**              | string | `9999px`                                                                                     | Fully rounded elements like circular buttons or date cells.                      |
| **shadows.dropdown**               | string | `0 10px 25px -5px rgba(0, 0, 0, 0.1)`                                                        | Shadow for dropdown menus and popup panels.                                      |
| **shadows.selected**               | string | `0 2px 8px rgba(59, 130, 246, 0.3)`                                                          | Shadow around selected date cells.                                               |
| **transitions.default**            | string | `all 0.2s ease`                                                                              | Default CSS transition for hover, selection, and animations.                     |
| **transitions.fast**               | string | `all 0.15s ease`                                                                             | Faster transitions for hover effects.                                            |
| **transitions.slow**               | string | `all 0.3s ease`                                                                              | Slower transitions for larger UI changes.                                        |
| **dimensions.dateSize**            | string | `36px`                                                                                       | Size (width & height) of each date cell.                                         |
| **dimensions.containerWidth**      | string | `320px`                                                                                      | Width of the main date picker container.                                         |
| **dimensions.containerMaxHeight**  | string | `280px`                                                                                      | Max height of the date picker container (scrollable if exceeded).                |
| **dimensions.iconSize**            | string | `16px`                                                                                       | Size of calendar navigation icons.                                               |

---

## ⛔ Date Restrictions

```ts
{
  minDate: { year: 2080, month: 1, day: 1 },
  maxDate: { year: 2082, month: 12, day: 30 },
  disabledDaysOfWeek: [0, 6],           // Sunday + Saturday
  disabledDates: [
    { year: 2081, month: 10, day: 15 }
  ]
}
```

---

## 🛠️ Pipes & Utilities

### Nepali Date Pipe

```html
{{ date | nepaliDate:'mediumDate':'ne' }}
{{ date | nepaliDate:'yyyy/MM/dd':'en':'AD' }}
{{ date | nepaliDate:'EEEE, dd MMMM yyyy':'en' }}
```

### 🔄 Date Conversion Service

```ts
constructor(private dateService: DateConversionService) {}

bsToAd = this.dateService.convertBsToAd('2081-10-15');
adToBs = this.dateService.convertAdToBs('2025-02-15');
currentBsDate = this.dateService.getCurrentBsDate();
```

---

## 🌍 Global Configuration

```ts
import { DATE_PICKER_CONFIG } from 'ngx-nepali-dualpicker';

providers: [
  {
    provide: DATE_PICKER_CONFIG,
    useValue: {
      theme: 'ocean',
      language: 'en',
      calendarType: 'BS'
    }
  }
];
```

Override per component:

```html
<ngx-nepali-dualpicker 
  [config]="{ theme: 'purple', mode: 'range' }">
</ngx-nepali-dualpicker>
```

---

## ❓ FAQ

### Does this Angular date picker support Bikram Sambat (BS)?

Yes. It fully supports the Nepali BS calendar.

### Can I convert BS to AD automatically?

Yes. It includes a built-in BS ↔ AD conversion engine.

### Does it support Angular Reactive Forms?

Yes. Full Reactive Forms integration.

### Is it compatible with Angular 17+?

Yes. Built for Angular 17+ and standalone architecture.

---

## 🎯 Use Cases

* Government systems in Nepal
* Banking & financial software
* School & college management systems
* HR & payroll applications
* Accounting software
* Nepali SaaS platforms

---

## 🔎 Keywords

Angular Nepali Date Picker, Angular BS Date Picker, Bikram Sambat Date Picker, Angular Calendar Component, BS to AD Converter Angular, Nepali Calendar Angular, Angular Range Date Picker, Angular Multiple Date Picker, Angular 17 Date Picker, Nepali SaaS Date Picker

---

## ⭐ Support the Project

If this Angular Nepali Date Picker helps your project:

* ⭐ Star the repository
* 📦 Use it in your production apps
* 🤝 Contribute or suggest improvements

---
