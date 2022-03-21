import { Suspense } from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withPerformance } from 'storybook-addon-performance'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import i18n from '../src/plugins/i18next/i18n'
import { Loaders } from '../src/modules/ui'

addParameters({
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  previewTabs: {
    'storybook/docs/panel': {
      index: -1
    },
    canvas: { title: 'Sandbox' }
  },
  backgrounds: {},
  theme: {
    default: 'light',
    selector: 'body',
    onChange (theme) {
      const iframe = document.querySelector('#storybook-preview-iframe') as HTMLIFrameElement
      const iframeDoc = iframe.contentWindow.document
      iframeDoc.documentElement.setAttribute('data-theme', theme.class)
    },
    themes: [
      {
        id: 'light',
        title: 'Light',
        class: 'light',
        color: '#fff'
      },
      {
        id: 'dark',
        title: 'Dark',
        class: 'dark',
        color: '#191919'
      }
    ]
  },
  apolloClient: {
    MockedProvider
  },
  i18n,
  locale: 'ru',
  locales: {
    ru: 'Русский (ru)',
    en: 'English (en)',
    be: 'Беларуская (be)',
    ko: '한국어 (ko)',
    es: 'Español (es)',
    uk: 'Українська (uk)'
  },
  options: {
    storySort: {
      order: [
        'Welcome',
        // Design System
        'Design System',
        [
          'General',
          'Layout',
          'Inputs',
          'Feedback',
        ],
        // Components
        'Components',
        // Pages
        'Pages'
      ]
    }
  }
})

addDecorator(withPerformance)

addDecorator(storyFn => <Suspense fallback={<Loaders />}>{storyFn()}</Suspense>)

addDecorator(storyFn => <MemoryRouter initialEntries={['/']}>{storyFn()}</MemoryRouter>)
