import { Metadata } from './metadata';
import { firestore } from 'firebase';

export class Film {
    kinopoisk_id: string;
    added_at: firestore.Timestamp;
    metadata: Metadata;
    description: string;
    cover: string;
    id: string;
    title: string;
}

