import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LandingPage } from "@/components/home/landing-page";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const siteName = t("siteName");
  const siteDescription = t("siteDescription");
  const homeTitle = t("homeTitle");

  return {
    title: homeTitle,
    description: siteDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_VE" : "en_US",
      url: `/${locale}`,
      siteName,
      title: `${homeTitle} | ${siteName}`,
      description: siteDescription,
      images: [
        {
          url: "/images/opengraph.png",
          width: 2048,
          height: 949,
          alt: t("openGraphAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${homeTitle} | ${siteName}`,
      description: siteDescription,
      images: ["/images/opengraph.png"],
    },
  };
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <LandingPage />;
}