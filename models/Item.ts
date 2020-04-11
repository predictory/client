import { Genre } from '~/models/Genre';

export interface Item {
    id: number;
    title: string;
    year: number;
    plot: string;
    poster: string;
    genres: Genre[];
}
