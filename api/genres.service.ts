import { NuxtAxiosInstance } from '@nuxtjs/axios';
import Service from '~/api/service';

export default class UsersService extends Service {
    constructor(api: NuxtAxiosInstance) {
        super(api);
        this.resource = '/genres';
    }

    async findByType(type: string): Promise<any> {
        const result = await this.api.$get(`${this.resource}/?type=${type}`);

        return result;
    }
}
