import { Store } from 'vuex';

export const actions = {
    async nuxtServerInit({ dispatch }: Store<any>) {
        await dispatch('genres/fetchMoviesGenres');
        await dispatch('genres/fetchSeriesGenres');
    }
};
