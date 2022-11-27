export enum TranslationKeyEnum {
  WelcomeLogin = 'welcome',
  Home = 'home',
  AppLanguage = 'app-language',
  Select = 'select',
  WelcomeText = 'welcome-text',
  Disable = 'disable',
  Enable = 'enable',
  DarkTheme = 'dark-theme',
  LanguageTitle = 'language-title',
  English = 'english',
  Portuguese = 'portuguese',
  MoviesSectionTitle = 'movies-section-title',
}

export type TranslationKey = { [K in TranslationKeyEnum]: string };

export default TranslationKeyEnum;
