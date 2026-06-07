import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common from './ja/common.json';
import unit from './ja/unit.json';
import effect from './ja/effect.json';
import skill from './ja/skill.json';
import equipment from './ja/equipment.json';

const resources = {
  ja: {
    common,
    unit,
    effect,
    skill,
    equipment
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    ns: ['common', 'unit', 'effect', 'skill', 'equipment'],
    defaultNS: 'common',
    lng: 'ja',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

i18n.services.formatter?.add('unit_number', (value) => {
  return String(value).padStart(3, '0');
});

export default i18n;
