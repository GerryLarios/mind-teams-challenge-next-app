import { CreateAccount, UpdateAccount } from '@/types';
import { Config } from '@/utils';
import {
  createDeleteProvider,
  createGetProvider,
  createPatchProvider,
  createPostProvider,
} from '../RequestSender';

const endpoint = `${Config.api}/users`;

export function createUser(payload: CreateAccount) {
  return createPostProvider(endpoint, payload);
}

export function deactivateUser(id: string) {
  return createDeleteProvider(`${endpoint}/${id}`);
}

export function findUser(id: string) {
  return createGetProvider(`${endpoint}/${id}`);
}

export function retrieveUser() {
  return createGetProvider(endpoint);
}

export function updateUsers(id: string, payload: UpdateAccount) {
  return createPatchProvider(`${endpoint}/${id}`, payload);
}

export function setUserProfile(id: string, payload: UpdateAccount) {
  return createPatchProvider(`${endpoint}/${id}/profile`, payload);
}
