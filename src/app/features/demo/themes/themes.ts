import {Component} from '@angular/core';
import {DatePickerConfig, NgxNepaliDualpicker} from "ngx-nepali-dualpicker";


interface ThemeProperty {
	property: string;
	type: string;
	defaultValue: string;
	description: string;
}

@Component({
  selector: 'app-themes',
    imports: [
        NgxNepaliDualpicker
    ],
  templateUrl: './themes.html',
  styleUrl: './themes.scss',
})
export class Themes {
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

	themeProperties: ThemeProperty[] = [
		{ property: 'colors.primary', type: 'string', defaultValue: '#3b82f6', description: 'Main color for selected dates, active buttons, and primary accents.' },
		{ property: 'colors.primaryHover', type: 'string', defaultValue: '#2563eb', description: 'Hover color for primary elements like buttons and dates.' },
		{ property: 'colors.primaryLight', type: 'string', defaultValue: '#eff6ff', description: 'Lighter shade of primary, used for backgrounds of selected ranges or highlights.' },
		{ property: 'colors.secondary', type: 'string', defaultValue: '#64748b', description: 'Secondary accent color for less prominent buttons or highlights.' },
		{ property: 'colors.background', type: 'string', defaultValue: '#ffffff', description: 'Overall background of the date picker container.' },
		{ property: 'colors.surface', type: 'string', defaultValue: '#f8fafc', description: 'Background for date cells, dropdowns, and cards inside the picker.' },
		{ property: 'colors.border', type: 'string', defaultValue: '#e2e8f0', description: 'Borders of input boxes, date cells, and dropdowns.' },
		{ property: 'colors.text', type: 'string', defaultValue: '#0f172a', description: 'Main text color for dates, labels, and headings.' },
		{ property: 'colors.textSecondary', type: 'string', defaultValue: '#64748b', description: 'Secondary text color for disabled text or hints.' },
		{ property: 'colors.textDisabled', type: 'string', defaultValue: '#cbd5e1', description: 'Disabled text color (unselectable dates).' },
		{ property: 'colors.error', type: 'string', defaultValue: '#ef4444', description: 'Error color for invalid selections or messages.' },
		{ property: 'colors.success', type: 'string', defaultValue: '#10b981', description: 'Success color for confirmation or valid selections.' },
		{ property: 'colors.selectedBg', type: 'string', defaultValue: '#3b82f6', description: 'Background color of selected date cells.' },
		{ property: 'colors.selectedText', type: 'string', defaultValue: '#ffffff', description: 'Text color of selected date cells.' },
		{ property: 'colors.hoverBg', type: 'string', defaultValue: '#f1f5f9', description: 'Background color when hovering over date cells.' },
		{ property: 'colors.todayText', type: 'string', defaultValue: '#3b82f6', description: 'Color of the "today" date indicator.' },
		{ property: 'colors.rangeBg', type: 'string', defaultValue: '#dbeafe', description: 'Background of dates within a selected range.' },
		{ property: 'colors.rangeHoverBg', type: 'string', defaultValue: '#bfdbfe', description: 'Background of dates when hovering over a range selection.' },
		{ property: 'spacing.containerPadding', type: 'string', defaultValue: '12px', description: 'Padding inside the main date picker container.' },
		{ property: 'spacing.dateGap', type: 'string', defaultValue: '4px', description: 'Gap between individual date cells.' },
		{ property: 'spacing.headerPadding', type: 'string', defaultValue: '12px', description: 'Padding around the month/year header section.' },
		{ property: 'spacing.pickerGap', type: 'string', defaultValue: '8px', description: 'Gap between multiple picker components (like AD/BS).' },
		{ property: 'typography.fontFamily', type: 'string', defaultValue: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', description: 'Font family used across the picker.' },
		{ property: 'typography.fontSize.base', type: 'string', defaultValue: '14px', description: 'Base font size for normal date labels.' },
		{ property: 'typography.fontSize.small', type: 'string', defaultValue: '12px', description: 'Font size for secondary text like weekdays or disabled dates.' },
		{ property: 'typography.fontSize.large', type: 'string', defaultValue: '16px', description: 'Font size for headers or highlighted text.' },
		{ property: 'typography.fontWeight.normal', type: 'number', defaultValue: '400', description: 'Normal text weight.' },
		{ property: 'typography.fontWeight.medium', type: 'number', defaultValue: '500', description: 'Medium weight for emphasis.' },
		{ property: 'typography.fontWeight.semibold', type: 'number', defaultValue: '600', description: 'Semi-bold for headings.' },
		{ property: 'typography.fontWeight.bold', type: 'number', defaultValue: '700', description: 'Bold weight for selected or highlighted dates.' },
		{ property: 'borderRadius.small', type: 'string', defaultValue: '4px', description: 'Border radius for small elements like date cells.' },
		{ property: 'borderRadius.medium', type: 'string', defaultValue: '6px', description: 'Medium radius for inputs or dropdowns.' },
		{ property: 'borderRadius.large', type: 'string', defaultValue: '8px', description: 'Large radius for picker container or panels.' },
		{ property: 'borderRadius.full', type: 'string', defaultValue: '9999px', description: 'Fully rounded elements like circular buttons or date cells.' },
		{ property: 'shadows.dropdown', type: 'string', defaultValue: '0 10px 25px -5px rgba(0,0,0,0.1)', description: 'Shadow for dropdown menus and popup panels.' },
		{ property: 'shadows.selected', type: 'string', defaultValue: '0 2px 8px rgba(59,130,246,0.3)', description: 'Shadow around selected date cells.' },
		{ property: 'transitions.default', type: 'string', defaultValue: 'all 0.2s ease', description: 'Default CSS transition for hover, selection, and animations.' },
		{ property: 'transitions.fast', type: 'string', defaultValue: 'all 0.15s ease', description: 'Faster transitions for hover effects.' },
		{ property: 'transitions.slow', type: 'string', defaultValue: 'all 0.3s ease', description: 'Slower transitions for larger UI changes.' },
		{ property: 'dimensions.dateSize', type: 'string', defaultValue: '36px', description: 'Size (width & height) of each date cell.' },
		{ property: 'dimensions.containerWidth', type: 'string', defaultValue: '320px', description: 'Width of the main date picker container.' },
		{ property: 'dimensions.containerMaxHeight', type: 'string', defaultValue: '280px', description: 'Max height of the date picker container (scrollable if exceeded).' },
		{ property: 'dimensions.iconSize', type: 'string', defaultValue: '16px', description: 'Size of calendar navigation icons.' },
	];

}
