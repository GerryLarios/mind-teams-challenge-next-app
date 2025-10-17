import type { ValueOf } from '@/types';

export const ErrorCodes = {
  DEFAULT: 'DEFAULT',
} as const;

export type ErrorCode = ValueOf<typeof ErrorCodes>;

export const ErrorMessages: Record<ErrorCode | 'DEFAULT', string> = {
  DEFAULT: 'Oops, there was an error!',
};
