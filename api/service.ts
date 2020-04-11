import { NuxtAxiosInstance } from '@nuxtjs/axios';

export default class Service {
    protected readonly api: NuxtAxiosInstance;
    protected resource: string = '/';

    constructor(api: NuxtAxiosInstance) {
        this.api = api;
    }

    async create(payload: any): Promise<any> {
        await this.api.$post(this.resource, payload);
    }

    async findAll(take: number = 10, skip: number = 0): Promise<any> {
        const items = await this.api.$get(`${this.resource}?take=${take}&skip=${skip}`);

        return items;
    }

    async findById(id: string | number): Promise<any> {
        const item = await this.api.$get(`${this.resource}/${id}`);

        return item;
    }
}
