const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      body: '#F3F6FD',
      transparent: 'transparent',
      black: '#0000',
      white: '#ffff',
      primary: {
        DEFAULT: '#0069ff',
        50: '#f2f8ff',
        100: '#e6f0ff',
        200: '#bfdaff',
        300: '#99c3ff',
        400: '#4d96ff',
        500: '#0069ff',
        600: '#005fe6',
        700: '#004fbf',
        800: '#003f99',
        900: '#00337d',
      },
      neutrals: {
        DEFAULT: '#001e4c',
        50: '#f2f4f6',
        100: '#e6e9ed',
        200: '#bfc7d2',
        300: '#99a5b7',
        400: '#4d6282',
        500: '#001e4c',
        600: '#001b44',
        700: '#001739',
        800: '#00122e',
        900: '#000f25',
      },
      gray: {
        50: '#f7f8fa',
        100: '#f7f8fa',
        200: '#f1f2f5',
        300: '#e4e6eb',
        400: '#bdbfc7',
        500: '#8f94a2',
        600: '#757a8a',
        650: '#696e7c',
        700: '#4f5461',
        800: '#2c3242',
        900: '#1b1f29',
      },
      blue: {
        DEFAULT: '#2680C2',
        50: '#DCEEFB',
        100: '#B6E0FE',
        200: '#84C5F4',
        300: '#62B0E8',
        400: '#4098D7',
        500: '#2680C2',
        600: '#186FAF',
        700: '#0F609B',
        800: '#0A558C',
        900: '#003E6B',
      },
      green: {
        ...colors.green,
      },
      indigo: {
        ...colors.indigo,
      },
      orange: {
        ...colors.orange,
      },
      rose: {
        ...colors.rose,
      },
      fuchsia: {
        ...colors.fuchsia,
      },
      violet: {
        ...colors.violet,
      },
      'light-blue': {
        ...colors.lightBlue,
      },
      cyan: {
        ...colors.cyan,
      },
      emerald: {
        ...colors.emerald,
      },
      lime: {
        ...colors.lime,
      },
      amber: {
        ...colors.amber,
      },
      pink: {
        ...colors.pink,
      },
      purple: {
        ...colors.purple,
      },
      red: {
        DEFAULT: '#BA2525',
        50: '#FFEEEE',
        100: '#FACDCD',
        200: '#F29B9B',
        300: '#E66A6A',
        400: '#D64545',
        500: '#BA2525',
        600: '#A61B1B',
        700: '#911111',
        800: '#780A0A',
        900: '#610404',
      },
      teal: {
        DEFAULT: '#27AB83',
        50: '#EFFCF6',
        100: '#C6F7E2',
        200: '#8EEDC7',
        300: '#65D6AD',
        400: '#3EBD93',
        500: '#27AB83',
        600: '#199473',
        700: '#147D64',
        800: '#0C6B58',
        900: '#014D40',
      },
      yellow: {
        DEFAULT: '#E9B949',
        50: '#FFFAEB',
        100: '#FCEFC7',
        200: '#F8E3A3',
        300: '#F9DA8B',
        400: '#F7D070',
        500: '#E9B949',
        600: '#C99A2E',
        700: '#A27C1A',
        800: '#7C5E10',
        900: '#513C06',
      },
    },
    extend: {},
  },
}