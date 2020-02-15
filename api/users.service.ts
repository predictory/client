import { NuxtAxiosInstance } from '@nuxtjs/axios';
import Service from '~/api/service';

export default class UsersService extends Service {
    constructor(api: NuxtAxiosInstance) {
        super(api);
        this.resource = '/users';
    }
}
