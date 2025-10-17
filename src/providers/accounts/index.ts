import { CreateAccount, UpdateAccount } from '@/types';
import { Config } from '@/utils';
import {
  createDeleteProvider,
  createGetProvider,
  createPatchProvider,
  createPostProvider,
} from '../RequestSender';

const endpoint = `${Config.api}/accounts`;

export function createAccount(payload: CreateAccount) {
  return createPostProvider(endpoint, payload);
}

export function deactivateAccount(id: string) {
  return createDeleteProvider(`${endpoint}/${id}`);
}

export function findAccount(id: string) {
  return createGetProvider(`${endpoint}/${id}`);
}

export function retrieveAccounts() {
  return createGetProvider(endpoint);
}

export function updateAccount(id: string, payload: UpdateAccount) {
  return createPatchProvider(`${endpoint}/${id}`, payload);
}
