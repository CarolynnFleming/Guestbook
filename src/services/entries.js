import { client, parseData } from './client';

export async function getEntries() {
    .from('entries')
    .select()
    .order('created_at', { ascending: false });
    return parseData(request);
}

export async function createEntry({})