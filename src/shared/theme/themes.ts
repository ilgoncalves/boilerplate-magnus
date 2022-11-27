import { ThemeType } from 'react-native-magnus';
import fonts from './fonts';
type themesNames = 'light' | 'dark';
type MyThemeType = {
  [name in themesNames]: ThemeType;
};

const colors = {
  blue900: '#2E4C6D',
};

export const themes: MyThemeType = {
  light: {
    name: 'light',
    colors,
    components: {
      Div: {
        bg: 'gray300',
      },
      Text: {
        fontFamily: fonts.roboto.regular,
        color: 'gray900',
      },
    },
  },
  dark: {
    name: 'dark',
    colors,
    components: {
      Div: {
        bg: 'gray700',
      },
      Text: {
        fontFamily: fonts.roboto.regular,
        color: 'gray100',
      },
    },
  },
};
