import { WebPlugin } from '@capacitor/core';
import type { DatePickerOptions, DatePickerPlugin } from './definitions';
export declare class DatePickerWeb extends WebPlugin implements DatePickerPlugin {
    present(options: DatePickerOptions): Promise<{
        value: string;
    }>;
}
