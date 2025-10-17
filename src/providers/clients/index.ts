import { CreateAccount, UpdateAccount } from '@/types';
import { Config } from '@/utils';
import {
  createDeleteProvider,
  createGetProvider,
  createPatchProvider,
  createPostProvider,
} from '../RequestSender';

const endpoint = `${Config.api}/clients`;

export function createClient(payload: CreateAccount) {
  return createPostProvider(endpoint, payload);
}

export function deactivateClient(id: string) {
  return createDeleteProvider(`${endpoint}/${id}`);
}

export function findClient(id: string) {
  return createGetProvider(`${endpoint}/${id}`);
}

export function retrieveClients() {
  return createGetProvider(endpoint);
}

export function updateClient(id: string, payload: UpdateAccount) {
  return createPatchProvider(`${endpoint}/${id}`, payload);
}

export function setClientProfile(id: string, payload: UpdateAccount) {
  return createPatchProvider(`${endpoint}/${id}/profile`, payload);
}
