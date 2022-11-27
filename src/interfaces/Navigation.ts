export const enum SCREENS {
  HOME = 'Home',
  HOME_TAB = 'HomeTab',
}

export type RootStackParamList = {
  [SCREENS.HOME_TAB]: { someParam: string };
};
