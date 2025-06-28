import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import { fileURLToPath } from 'node:url'
import ts from 'typescript-eslint'

import svelteConfig from './svelte.config.js'

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url))

export default ts.config(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...svelte.configs.recommended,
  ...ts.configs.recommended,
  prettier,
  ...svelte.configs.prettier,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-undef': 'off',
      'no-console': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^import\\s+type\\s'],
            ['^\\u0000'],
            ['^@\\w'],
            ['^[^./$].*$'],
            [
              '^\\$lib/components/templates/.*/index$',
              '^\\$lib/components/templates/',
            ],
            [
              '^\\$lib/components/common/.*/index$',
              '^\\$lib/components/common/',
            ],
            ['^\\$lib/components/ui/.*/index$', '^\\$lib/components/ui/'],
            ['^\\$lib'],
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte', '.svelte.ts'],
        parser: ts.parser,
        svelteConfig,
      },
    },
  },
)
