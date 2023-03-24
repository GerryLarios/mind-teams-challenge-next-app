import { AuthFormData } from '@/types';
import { Config } from '@/utils';
import { createPostProvider } from '../RequestSender';

const endpoint = `${Config.api}/auth`;

export function signin(payload: AuthFormData) {
  return createPostProvider(`${endpoint}/signin`, payload);
}

export function signup(payload: AuthFormData) {
  return createPostProvider(`${endpoint}/signup`, payload);
}
