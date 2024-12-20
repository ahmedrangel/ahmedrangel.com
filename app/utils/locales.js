import es from "~/strings/es.js";
import en from "~/strings/en.js";
import { INFO } from "~/utils/info.js";

const locales = { es, en };

class LocaleLang {
  constructor (code) {
    this.code = ref(String(code).toLowerCase());
  }

  i18n (key) {
    return locales[this.code.value][key] || locales.es[key] || key;
  }

  set (code = INFO.lang) {
    this.code.value = String(code).toLowerCase();
    localStorage.setItem("lang", this.code.value);
    useHead({ htmlAttrs: { lang: this.code.value } });
  }

  get () {
    return this.code.value;
  }

  init () {
    const lang = localStorage.getItem("lang", this.code.value);
    this.code.value = lang ? lang : locale.lang.get();
    locale.lang.set(this.code.value);
  }
}

export const locale = {
  lang: new LocaleLang(INFO.lang)
};

export const t = (key) => {
  return locale.lang.i18n(key);
};
