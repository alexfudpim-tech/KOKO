// Official KokonutUI utility: https://kokonutui.com/r/utils.json
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs) { return twMerge(clsx(inputs)); }
