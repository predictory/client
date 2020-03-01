module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        semi: [2, 'always'],
        'no-console': 'off',
        'vue/max-attributes-per-line': 'off',
        'prettier/prettier': ['error', { semi: true }],
        indent: 'off',
        'vue/html-indent': ['error', 4],
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
                switchCase: 1
            }
        ],
        'require-await': 'off'
    }
};
