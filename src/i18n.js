import i18n from 'i18next';
import Translations  from 'i18next-resource-store-loader!./assets/i18n';

i18n.init({
    lng: 'ua',
    resources: Translations
});

export default i18n;
