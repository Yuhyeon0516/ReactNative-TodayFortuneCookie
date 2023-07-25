import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { useEffect, useState } from "react";

const en = require("../lang/lang.en.json");
const es = require("../lang/lang.es.json");
const ja = require("../lang/lang.ja.json");
const ko = require("../lang/lang.ko.json");
const zh = require("../lang/lang.zh.json");

const i18n = new I18n({
  en,
  es,
  ja,
  ko,
  zh,
});

export const useTranslation = () => {
  const [locale, setLocale] = useState(null);

  useEffect(() => {
    setLocale(getLocales()[0].languageCode);
  }, []);

  return {
    t: (scope) => i18n.t(scope, { locale }),
    locale,
    setLocale,
  };
};
