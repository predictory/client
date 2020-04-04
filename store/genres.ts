import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { Genre } from '~/models';

export const state = () => ({
    moviesGenres: [] as Genre[],
    seriesGenres: [] as Genre[]
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
    moviesGenres: state => state.moviesGenres,
    seriesGenres: state => state.seriesGenres
};

export const mutations: MutationTree<RootState> = {
    setMoviesGenres: (state, genres: Genre[]) => (state.moviesGenres = genres),
    setSeriesGenres: (state, genres: Genre[]) => (state.seriesGenres = genres)
};

export const actions: ActionTree<RootState, RootState> = {
    async fetchMoviesGenres({ commit }) {
        try {
            const genres = await this.$services.genresService.findByType('movie');
            commit('setMoviesGenres', genres);
        } catch (error) {
            this.$sentry.captureException(error);
        }
    },
    async fetchSeriesGenres({ commit }) {
        try {
            const genres = await this.$services.genresService.findByType('series');
            commit('setSeriesGenres', genres);
        } catch (error) {
            this.$sentry.captureException(error);
        }
    }
};
