import i18next, { InitOptions } from "i18next";
import translation from "./cs/translation.json";
// import translation from "./cs/translation.json" assert { type: "json" };

i18next.init({
  lng: "cs",
  //   debug: true,
  resources: {
    cs: {
      translation,
    },
  },
});
