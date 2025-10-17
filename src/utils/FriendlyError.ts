import type { ErrorCode } from './errors';

export default class FriendlyError {
  constructor(readonly code: ErrorCode | string) {}
}
