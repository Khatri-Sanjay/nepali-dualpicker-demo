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
- [FAQ](#-faq)
- [Use Cases](#-use-cases)



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

Supports custom colors, typography, spacing & shadows.

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

## 🎨 Custom Theme Example

```ts
customThemeConfig = {
  theme: 'light',
  customTheme: {
    colors: {
      primary: '#e63946',
      selectedBg: '#e63946',
      todayText: '#e63946'
    }
  }
};
```

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

## 🔄 Date Conversion Service

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

## 🔹 Installation & Import

```bash
	npm install ngx-nepali-dualpicker
```

```ts
import { NgxNepaliDualpicker } from 'ngx-nepali-dualpicker';
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
