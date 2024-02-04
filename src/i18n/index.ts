import spanish from './es.json'
import english from './en.json'

export const languages = {
  en: 'English',
  es: 'Español',
};

export const getI18N = (currentLocale?: string) => {
  if(currentLocale === 'en') return english;
  if(currentLocale === 'es') return spanish;
  return english
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang;
  return '';
}