import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    // Ignora artefactos generados en cualquier paquete del monorepo
    globalIgnores(['**/dist/**', '**/node_modules/**']),
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            //  Necesario si se suben los tsconfig al root del monorepo
            //   parserOptions: {
            //     project: ['./tsconfig.node.json', './tsconfig.app.json'],
            //     tsconfigRootDir: import.meta.dirname,
            //   },
        },
        extends: [
            js.configs.recommended,
            ...tseslint.configs.strict,
            ...tseslint.configs.stylistic,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        rules: {
            ...reactHooks.configs.recommended.rules,
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            // Workaround: avoid crash "typeParameters.params is not iterable" in
            // @typescript-eslint/unified-signatures with TS 5.9 + ESLint 9.x.
            // See: https://github.com/typescript-eslint/typescript-eslint/issues (related)
            '@typescript-eslint/unified-signatures': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
]);
