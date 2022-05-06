import { client } from './client';

export function getUser() {
    return client.auth.user();
}