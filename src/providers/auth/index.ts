import { AuthFormData, UserResult } from '@/types';
import { Config } from '@/utils';
import { createGetProvider, createPostProvider } from '../RequestSender';

const endpoint = `${Config.api}/auth`;

export function signin(payload: AuthFormData): Promise<string> {
  return createPostProvider(`${endpoint}/signin`, payload);
}

export function signup(payload: AuthFormData): Promise<void> {
  return createPostProvider(`${endpoint}/signup`, payload);
}

export function getAuthenticatedUser(): Promise<UserResult> {
  return createGetProvider(`${endpoint}/me`);
}
