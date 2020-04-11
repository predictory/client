import { Plugin } from '@nuxt/types';
import UsersService from '~/api/users.service';
import GenresService from '~/api/genres.service';
import ItemsService from '~/api/items.service';

interface Services {
    usersService: UsersService;
    genresService: GenresService;
    itemsService: ItemsService;
}

declare module 'vue/types/vue' {
    interface Vue {
        $services: Services;
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $services: Services;
    }
}

declare module 'vuex/types/index' {
    interface Store<S> {
        $services: Services;
    }
}

const plugin: Plugin = (ctx, inject) => {
    const usersService = new UsersService(ctx.$axios);
    const genresService = new GenresService(ctx.$axios);
    const itemsService = new ItemsService(ctx.$axios);

    const services: Services = {
        usersService,
        genresService,
        itemsService
    };

    inject('services', services);
};

export default plugin;
