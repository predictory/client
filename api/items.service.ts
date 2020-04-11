import { NuxtAxiosInstance } from '@nuxtjs/axios';
import Service from '~/api/service';

export default class ItemsService extends Service {
    constructor(api: NuxtAxiosInstance) {
        super(api);
        this.resource = '/movies';
    }
}
