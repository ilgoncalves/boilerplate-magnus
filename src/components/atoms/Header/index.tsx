import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Div, Icon, Text } from 'react-native-magnus';
import fonts from '../../../shared/theme/fonts';

interface IHeaderProps {
  children: string;
  backButton?: boolean;
}

export const Header: FC<IHeaderProps> = ({ children, backButton }) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <Div
      mt={getStatusBarHeight() + 20}
      mx={24}
      mb={20}
      flexDir="row"
      alignItems="center">
      {backButton && (
        <TouchableOpacity onPress={handleBack}>
          <Icon
            p={0}
            m={0}
            fontSize={28}
            color="gray100"
            mr="sm"
            fontFamily="Ionicons"
            name="arrow-back-outline"
          />
        </TouchableOpacity>
      )}
      <Text fontWeight="bold" fontFamily={fonts.roboto.bold} fontSize={24}>
        {children}
      </Text>
    </Div>
  );
};
