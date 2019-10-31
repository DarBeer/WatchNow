import { Human } from './human';
import { firestore } from 'firebase';

export class Metadata {
    kinopoisk_rating: string[];
    year: number;
    duration: string[];
    imdb_rating: string[];
    actors: Human[];
    countries: string[];
    dubbing: any[];
    release_date: firestore.Timestamp;
    producers: Human[];
}