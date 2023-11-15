import "./index"; // import i18next instance kvůli včasné inicializaci, TODO - zlepšit
import i18next from "i18next";

export const translate = (key: string, params?: { data: any }): string => i18next.t(key, params);
