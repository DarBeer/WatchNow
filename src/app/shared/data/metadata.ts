import { Human } from './human';

export interface Metadata {
    kinopoisk_rating: string[];
    year: number;
    duration: string[];
    imdb_rating: string[];
    actors: Human[];
    countries: string[];
    dubbing: any[];
    release_date: string;
    producers: Human[];
}