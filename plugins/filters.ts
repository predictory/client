import Vue from 'vue';

Vue.filter('truncate', (value: string, length: number = 30) => {
    return value && value.length > length ? value.substring(0, length) + '...' : value;
});
