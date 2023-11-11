import i18next from "i18next";

export const translate = (key: string, params?: { data: any }): string => i18next.t(key, params);
