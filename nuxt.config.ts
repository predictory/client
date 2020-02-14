import { Configuration } from '@nuxt/types';
const config = require('config');

const client: any = config.get('client');
const api: any = config.get('api');
const url = `http://${api.host}:${api.port}`;

const nuxtConfig: Configuration = {
    mode: 'universal',
    typescript: {
        typeCheck: true,
        ignoreNotFoundWarnings: true
    },
    server: {
        port: client.port,
        host: client.host
    },
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s | Predictory',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['ant-design-vue/dist/antd.css', './assets/css/global.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/antd-ui'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@nuxt/typescript-build'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
        '@nuxtjs/auth'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: url
    },
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: '/auth/login',
                        method: 'post',
                        propertyName: 'accessToken'
                    },
                    logout: false,
                    user: {
                        url: '/users/me',
                        method: 'get',
                        propertyName: false
                    }
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {},
    /*
     ** Style resources
     */
    styleResources: {
        scss: './assets/css/variables.scss'
    },
    router: {
        middleware: ['auth']
    }
};

export default nuxtConfig;
