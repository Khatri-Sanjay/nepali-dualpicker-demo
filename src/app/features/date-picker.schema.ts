import { z } from 'zod';

/**
 * Reusable date object
 */
const DateObjectSchema = z.object({
  year: z.number(),
  month: z.number(),
  day: z.number(),
});

/**
 * Date input types
 */
const DateInputSchema = z.union([
  z.date(),
  z.string(),
  DateObjectSchema
]);

/**
 * Main DatePickerConfig runtime schema
 */
export const DatePickerSchema = z.object({
  language: z.enum(['en', 'ne']).optional(),

  allowManualInput: z.boolean().optional(),

  calendarType: z.enum(['AD', 'BS']).optional(),

  autoConvert: z.boolean().optional(),

  displayFormat: z.enum([
    'yyyy-MM-dd',
    'yyyy/MM/dd',
    'MM/dd/yyyy',
    'dd/MM/yyyy',
    'MMM dd, yyyy',
    'dd-MM-yyyy'
  ]).optional(),

  outputFormat: z.enum([
    'yyyy-MM-dd',
    'yyyy/MM/dd',
    'MM/dd/yyyy',
    'dd/MM/yyyy',
    'dd-MM-yyyy'
  ]).optional(),

  monthDisplayType: z.enum(['default', 'short']).optional(),
  dayDisplayType: z.enum(['default', 'short']).optional(),

  mode: z.enum(['single', 'range', 'multiple']).optional(),

  allowModeToggle: z.boolean().optional(),

  minDate: DateInputSchema.optional(),
  maxDate: DateInputSchema.optional(),

  disableFutureDates: z.boolean().optional(),
  disablePastDates: z.boolean().optional(),

  disabledDates: z.array(DateInputSchema).optional(),

  disabledDaysOfWeek: z.array(z.number()).optional(),

  showClearButton: z.boolean().optional(),
  showTodayButton: z.boolean().optional(),
  closeOnSelect: z.boolean().optional(),

  placeholder: z.string().optional(),

  position: z.enum([
    'bottom-left',
    'bottom-right',
    'top-left',
    'top-right',
    'auto'
  ]).optional(),

  theme: z.any().optional(), // because PresetThemeName | DatePickerTheme | 'system'

  customTheme: z.any().optional(),

  yearRange: z.object({
    start: z.number(),
    end: z.number()
  }).optional(),

  ariaLabels: z.object({
    calendar: z.string().optional(),
    nextMonth: z.string().optional(),
    prevMonth: z.string().optional(),
    selectDate: z.string().optional(),
    clearDate: z.string().optional(),
    today: z.string().optional(),
  }).optional(),

  mobileMode: z.enum(['compact', 'full']).optional(),

  firstDayOfWeek: z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
  ]).optional(),

  inline: z.boolean().optional(),

  multipleSelectionSettings: z.object({
    maxSelections: z.number().optional(),
  }).optional(),
});
