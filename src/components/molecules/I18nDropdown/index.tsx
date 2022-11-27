import React, { FC, ReactNode, Ref } from 'react';
import { Dropdown, Text, DropdownRef, Icon } from 'react-native-magnus';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '../../../assets/i18n';

interface II18nDropdownProps {
  dropdownRef: Ref<DropdownRef>;
}
export const I18nDropdown: FC<II18nDropdownProps> = ({ dropdownRef }) => {
  const { i18n, t } = useTranslation();
  const Option = ({
    value,
    children,
  }: {
    value: string;
    children: ReactNode;
  }) => (
    <Dropdown.Option
      prefix={
        <Icon
          name="globe-outline"
          mr="lg"
          fontFamily="Ionicons"
          color="orange700"
          fontSize="3xl"
        />
      }
      value={value}
      py={20}
      px="xl"
      onSelect={language => i18n.changeLanguage(language)}
      block>
      {children}
    </Dropdown.Option>
  );
  return (
    <Dropdown
      ref={dropdownRef}
      title={
        <Text fontSize={16} mx="xl" color="gray500" pb="md">
          {t(TranslationsKeys.LanguageTitle)}
        </Text>
      }
      mt="md"
      pb="2xl"
      showSwipeIndicator={true}
      roundedTop="xl">
      <Option value="en">{t(TranslationsKeys.English)}</Option>
      <Option value="pt">{t(TranslationsKeys.Portuguese)}</Option>
    </Dropdown>
  );
};
