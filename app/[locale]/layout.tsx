import { notFound } from "next/navigation";
import React from "react";
import NextIntlProvider from "./NextIntlProvider";
// Can be imported from a shared config
const locales = ["fr", "vi"];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  const locale = params.locale;
  if (!locales.includes(locale as any)) notFound();
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <div lang={locale}>
      <NextIntlProvider
        locale={params.locale}
        messages={messages}
        timeZone="Europe/Berlin"
        now={new Date()}
      >
        {children}
      </NextIntlProvider>
    </div>
  );
}
