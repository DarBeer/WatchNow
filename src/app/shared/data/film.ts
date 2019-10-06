import { Metadata } from './metadata';

export interface Film {
    kinopoisk_id: string;
    added_at: string;
    metadata: Metadata;
    cover: string;
    id: string;
    title: string;
}

