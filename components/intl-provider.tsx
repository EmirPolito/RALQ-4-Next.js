"use client";

import { NextIntlClientProvider } from "next-intl";
import { useLanguage } from "@/context/language-context";
import esMessages from "@/messages/es.json";
import enMessages from "@/messages/en.json";
import ptMessages from "@/messages/pt.json";
import type { Locale } from "@/context/language-context";

const messages: Record<Locale, typeof esMessages> = {
  es: esMessages,
  en: enMessages as unknown as typeof esMessages,
  pt: ptMessages as unknown as typeof esMessages,
};

export function IntlProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();

  return (
    <NextIntlClientProvider locale={locale} messages={messages[locale]}>
      {children}
    </NextIntlClientProvider>
  );
}
