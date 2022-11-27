import React, { FC, useContext, useMemo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Div, Text, ThemeContext, Toggle } from 'react-native-magnus';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '../../../assets/i18n';
import { themes } from '../../../shared/theme/themes';

export const DarkModeToggle: FC = ({}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDarkMode = useMemo(() => theme.name === 'dark', [theme]);
  const { t } = useTranslation();
  const onToggle = () => {
    if (isDarkMode) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <TouchableOpacity onPress={onToggle}>
      <Div alignItems="center" flexDir="row" justifyContent="space-between">
        <Text fontSize={16}>
          {isDarkMode
            ? t(TranslationsKeys.Disable)
            : t(TranslationsKeys.Enable)}{' '}
          {t(TranslationsKeys.DarkTheme)}
        </Text>
        <Toggle
          on={isDarkMode}
          onPress={onToggle}
          bg="gray100"
          circleBg="orange600"
          activeBg="orange700"
          h={30}
          w={60}
        />
      </Div>
    </TouchableOpacity>
  );
};
