import { Plugin } from '@nuxt/types';
import UsersService from '~/api/users.service';

interface Services {
    usersService: UsersService;
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

    const services: Services = {
        usersService
    };

    inject('services', services);
};

export default plugin;
