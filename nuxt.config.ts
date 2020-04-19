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
    css: ['./assets/css/main.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/services', '@/plugins/validate', '@/plugins/fragment', '@/plugins/filters'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', '@nuxt/typescript-build'],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/auth',
        '@nuxtjs/sentry',
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources'
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
        },
        redirect: {
            login: '/login',
            logout: '/login',
            home: '/'
        }
    },
    /*
     ** Build configuration
     */
    build: {},
    sentry: {
        dsn: 'https://040940ea501f4c07939e9e4e606dc6c2@sentry.io/2570457'
    },
    bootstrapVue: {
        bootstrapCSS: false, // Or `css: false`
        bootstrapVueCSS: false // Or `bvCSS: false`
    },
    styleResources: {
        scss: [
            '@/assets/css/variables.scss',
            '@/node_modules/bootstrap/scss/bootstrap.scss',
            '@/node_modules/bootstrap-vue/src/index.scss'
        ]
    },
    router: {
        middleware: ['auth']
    }
};

export default nuxtConfig;
