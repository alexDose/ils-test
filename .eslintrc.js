module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', '@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    },
};
