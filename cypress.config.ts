import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    'baseUrl': 'http://localhost:4200'
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      options: {
        projectConfig: {
          root: '',
          sourceRoot: 'src',
          buildOptions: {
            tsConfig: 'tsconfig.e2e.json',
          },
        },
      },
    },
    specPattern: '**/*.cy.ts'
  },

})