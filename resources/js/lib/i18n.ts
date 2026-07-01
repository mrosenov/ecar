import type { LocaleMessageDictionary, VueMessageType } from 'vue-i18n';
import { createI18n } from 'vue-i18n';

const localeModules = import.meta.glob<{
    default: LocaleMessageDictionary<VueMessageType>;
}>('../locales/*.json', { eager: true });

const messages: Record<
    string,
    LocaleMessageDictionary<VueMessageType>
> = Object.fromEntries(
    Object.entries(localeModules).map(([path, module]) => {
        const locale = path.match(/([\w-]+)\.json$/)?.[1] ?? 'en';

        return [locale, module.default];
    }),
);

export const i18n = createI18n<
    [LocaleMessageDictionary<VueMessageType>],
    string,
    false
>({
    legacy: false,
    locale: document.documentElement.lang || 'en',
    fallbackLocale: 'en',
    messages,
});
