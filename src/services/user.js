import { client } from './client';

export function getUser() {
  return client.auth.user();
}

export function getSession() {
    return client.auth.session();
}