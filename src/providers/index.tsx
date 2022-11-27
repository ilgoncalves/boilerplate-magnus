import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { store } from '~/redux/AppStore';

import { ThemeProvider } from 'react-native-magnus';
import { themes } from '~/shared/theme/themes';

interface Props {
  children: React.ReactNode;
}

export const Provider: React.FC<Props> = ({ children }: Props) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={themes.dark}>{children}</ThemeProvider>
    </ReduxProvider>
  );
};
