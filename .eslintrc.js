module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node':true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'ignorePatterns': ['*.test.js'],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'no-unused-vars': [
            'off'
        ],
        'react/prop-types': 'off',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': 'off',
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
    },
    'settings':{
        'react':{
            'version': 'detect'
        }
    }
};
