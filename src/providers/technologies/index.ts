import { CreateAccount } from '@/types';
import { Config } from '@/utils';
import { createDeleteProvider, createGetProvider, createPostProvider } from '../RequestSender';

const endpoint = `${Config.api}/technologies`;

export function createTechnologies(payload: CreateAccount) {
  return createPostProvider(endpoint, payload);
}

export function deleteTechnology(id: string) {
  return createDeleteProvider(`${endpoint}/${id}`);
}

export function retrieveTechnologies() {
  return createGetProvider(endpoint);
}
