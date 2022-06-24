export const whiteAlpha = Object.freeze({
  whiteAlpha20: 'rgba(255, 255, 255, 0.02)',
  whiteAlpha50: 'rgba(255, 255, 255, 0.04)',
  whiteAlpha100: 'rgba(255, 255, 255, 0.06)',
  whiteAlpha200: 'rgba(255, 255, 255, 0.08)',
  whiteAlpha300: 'rgba(255, 255, 255, 0.16)',
  whiteAlpha400: 'rgba(255, 255, 255, 0.24)',
  whiteAlpha500: 'rgba(255, 255, 255, 0.36)',
  whiteAlpha600: 'rgba(255, 255, 255, 0.48)',
  whiteAlpha700: 'rgba(255, 255, 255, 0.64)',
  whiteAlpha800: 'rgba(255, 255, 255, 0.80)',
  whiteAlpha900: 'rgba(255, 255, 255, 0.92)',
} as const);

export const blackAlpha = Object.freeze({
  blackAlpha20: 'rgba(0, 0, 0, 0.02)',
  blackAlpha50: 'rgba(0, 0, 0, 0.04)',
  blackAlpha100: 'rgba(0, 0, 0, 0.06)',
  blackAlpha200: 'rgba(0, 0, 0, 0.08)',
  blackAlpha300: 'rgba(0, 0, 0, 0.16)',
  blackAlpha400: 'rgba(0, 0, 0, 0.24)',
  blackAlpha500: 'rgba(0, 0, 0, 0.36)',
  blackAlpha600: 'rgba(0, 0, 0, 0.48)',
  blackAlpha700: 'rgba(0, 0, 0, 0.64)',
  blackAlpha800: 'rgba(0, 0, 0, 0.80)',
  blackAlpha900: 'rgba(0, 0, 0, 0.92)',
} as const);

export const colors = Object.freeze({
  ...blackAlpha,
  ...whiteAlpha,
  colorBackground: 'white',
  colorInputBackground: 'white',
  colorText: 'black',
  colorTextOnPrimaryBackground: 'white',
  colorTextSecondary: 'rgba(0,0,0,0.65)',
  colorInputText: 'black',
  transparent: 'transparent',
  white: 'white',
  black: 'black',
  primary50: '#f0f3ff',
  primary100: '#d1dcff',
  primary200: '#91A7F7',
  primary300: '#6684F5',
  primary400: '#3B62F2',
  primary500: '#103FEF',
  primary600: '#0D33BF',
  primary700: '#0A268F',
  primary800: '#07195F',
  primary900: '#030D30',
  danger50: '#FFE6E5',
  danger100: '#FFB9B8',
  danger200: '#FF8D8A',
  danger300: '#FF605C',
  danger400: '#FF332E',
  danger500: '#FF1D17',
  danger600: '#CC0500',
  danger700: '#990400',
  danger800: '#660300',
  danger900: '#330100',
  warning50: '#FEF9E7',
  warning100: '#FCEEBB',
  warning200: '#FAE28F',
  warning300: '#F8D763',
  warning400: '#F6CC37',
  warning500: '#F4C10B',
  warning600: '#C49A08',
  warning700: '#937406',
  warning800: '#624D04',
  warning900: '#312702',
  success50: '#EBFAEB',
  success100: '#C6F0C6',
  success200: '#A2E7A2',
  success300: '#7EDD7E',
  success400: '#5AD35A',
  success500: '#35CA35',
  success600: '#2BA12B',
  success700: '#207920',
  success800: '#155115',
  success900: '#0B280B',
} as const);
