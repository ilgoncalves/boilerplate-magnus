import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { isReadyRef, navigationRef } from 'react-navigation-helpers';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Pages
import { Home } from '../pages';
import { Icon, ThemeContext } from 'react-native-magnus';
import { StatusBar } from 'react-native';
import { RootStackParamList, SCREENS } from '../interfaces';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  const { theme } = useContext(ThemeContext);

  const isDarkMode = theme.name === 'dark';

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
  }, [theme]);

  useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const renderTabIcon = (route: any, color: string, size: number) => {
    let iconName = 'home';
    let routes: any = {
      [SCREENS.HOME]: 'home',
    };

    return (
      <Icon
        name={routes[route.name] || iconName}
        fontSize={size}
        fontFamily="SimpleLineIcons"
        color={color}
      />
    );
  };

  const HomeTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => renderTabIcon(route, color, size),
          tabBarActiveTintColor: '#ed8936',
          tabBarInactiveTintColor: '#a0aec0',
          tabBarStyle: {
            backgroundColor: isDarkMode ? '#1a202c' : '#f7fafc',
          },
          tabBarLabel: () => {
            return null;
          },
        })}>
        <Tab.Screen name={SCREENS.HOME} component={Home} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME_TAB} component={HomeTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
