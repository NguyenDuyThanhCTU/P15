import { notFound } from "next/navigation";
import React from "react";
import NextIntlProvider from "./NextIntlProvider";
import { Metadata } from "next";
// Can be imported from a shared config
const locales = ["vi", "fr"];

export const metadata: Metadata = {
  title: "Á Châu",
  description: "Asia Lebensmittel",
};

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
