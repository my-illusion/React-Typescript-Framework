module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'react-app',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.tsx', '.js', '.jsx'] },
        ],
    },
}
