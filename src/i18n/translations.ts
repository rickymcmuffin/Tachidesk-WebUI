/*
 * Copyright (C) Contributors to the Suwayomi project
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import ar from '@/i18n/locale/ar.json';
import de from '@/i18n/locale/de.json';
import es from '@/i18n/locale/es.json';
import en from '@/i18n/locale/en.json'; // default language
import fr from '@/i18n/locale/fr.json';
import id from '@/i18n/locale/id.json';
import it from '@/i18n/locale/it.json';
import ja from '@/i18n/locale/ja.json';
import ko from '@/i18n/locale/ko.json';
import pt from '@/i18n/locale/pt.json';
import uk from '@/i18n/locale/uk.json';
import vi from '@/i18n/locale/vi.json';
import zh_Hans from '@/i18n/locale/zh_Hans.json';
import zh_Hant from '@/i18n/locale/zh_Hant.json';

const translationHelper = <T>(lng: T) => ({
    translation: lng,
});

/**
 * Keys have to match {@link ISOLanguages} codes, they're used for showing the language name in the dropdown in the {@link Settings}.<br/>
 * In case there is no language code for the key in {@link ISOLanguages}, the corresponding language has to be added
 */
export const resources = {
    ar: translationHelper(ar),
    de: translationHelper(de),
    es: translationHelper(es),
    en: translationHelper(en), // default language
    fr: translationHelper(fr),
    id: translationHelper(id),
    it: translationHelper(it),
    ja: translationHelper(ja),
    ko: translationHelper(ko),
    pt: translationHelper(pt),
    uk: translationHelper(uk),
    vi: translationHelper(vi),
    'zh-Hans': translationHelper(zh_Hans),
    'zh-Hant': translationHelper(zh_Hant),
} as const;
