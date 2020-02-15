import { NuxtAxiosInstance } from '@nuxtjs/axios';

export default class Service {
    private readonly api: NuxtAxiosInstance;
    protected resource: string = '/';

    constructor(api: NuxtAxiosInstance) {
        this.api = api;
    }

    async create(payload: any): Promise<any> {
        await this.api.$post(this.resource, payload);
    }
}
