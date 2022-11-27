import TranslationKeyEnum, { TranslationKey } from '../translation.keys';

const translations: TranslationKey = {
  [TranslationKeyEnum.WelcomeLogin]: 'Bem-Vindo',
  [TranslationKeyEnum.Home]: 'Início',
  [TranslationKeyEnum.AppLanguage]: 'Idioma do aplicativo',
  [TranslationKeyEnum.Select]: 'Selecionar',
  [TranslationKeyEnum.DarkTheme]: 'tema escuro',
  [TranslationKeyEnum.Disable]: 'Desabilitar',
  [TranslationKeyEnum.Enable]: 'Habilitar',
  [TranslationKeyEnum.WelcomeText]:
    'Bem-Vindo, esse é um excelente boilerplate',
  [TranslationKeyEnum.LanguageTitle]: 'Selecione seu idioma favorito',
  [TranslationKeyEnum.English]: 'Inglês',
  [TranslationKeyEnum.Portuguese]: 'Português',
  [TranslationKeyEnum.MoviesSectionTitle]: 'Título do filme',
};

export default { translation: translations };
