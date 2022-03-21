import { create } from '@storybook/theming'

// @ts-ignore
import logo from './assets/logo.svg'

export default create({
  base: 'light',

  // Brand
  brandImage: logo,
  brandUrl: '/',
  brandTitle: 'Denezhki | Design',

  colorPrimary: '#333',
  colorSecondary: '#333',

  // UI
  appBg: 'white',
  appContentBg: 'white',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: '#999',
  barSelectedColor: 'black',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 8
})
