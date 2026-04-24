"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Footer from "@/components/footer";

export default function PoliticaPrivacidad() {
  const t = useTranslations("privacidad");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-5 py-35 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-ttl mb-4 tracking-tight">
          {t("title")}
        </h1>
        <div className="space-y-6 text-base text-desc leading-relaxed">
          <p>
            En <strong className="font-bold">RALQ</strong> {t("intro")}
          </p>

          <h2 className="text-2xl font-semibold text-ttl mt-10 mb-3">
            {t("s1Title")}
          </h2>
          <p>{t("s1Intro")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="font-bold">{t("s1l1Label")}</strong> {t("s1l1")}
            </li>
            <li>
              <strong className="font-bold">{t("s1l2Label")}</strong> {t("s1l2")}
            </li>
            <li>
              <strong className="font-bold">{t("s1l3Label")}</strong> {t("s1l3")}
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-ttl mt-10 mb-3">
            {t("s2Title")}
          </h2>
          <p>{t("s2Intro")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("s2l1")}</li>
            <li>{t("s2l2")}</li>
            <li>{t("s2l3")}</li>
            <li>{t("s2l4")}</li>
          </ul>

          <h2 className="text-2xl font-semibold text-ttl mt-10 mb-3">
            {t("s3Title")}
          </h2>
          <p>{t("s3Intro")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="font-bold">{t("s3l1Label")}</strong> {t("s3l1")}
            </li>
            <li>
              <strong className="font-bold">{t("s3l2Label")}</strong> {t("s3l2")}
            </li>
            <li>{t("s3l3")}</li>
          </ul>

          <h2 className="text-2xl font-semibold text-ttl mt-10 mb-3">
            {t("s4Title")}
          </h2>
          <p>{t("s4")}</p>

          <h2 className="text-2xl font-semibold text-ttl mt-10 mb-3">
            {t("s5Title")}
          </h2>
          <p>
            {t("s5")}{" "}
            <Link
              href="/contacto"
              className="text-link underline underline-offset-4"
            >
              {t("s5Link")}
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold text-ttl mt-10 mb-3">
            {t("s6Title")}
          </h2>
          <p>
            {t("s6")}{" "}
            <Link
              href="/contacto"
              className="text-link underline underline-offset-4"
            >
              {t("s6Link")}
            </Link>
            .
          </p>
          <p className="text-sm text-desc pt-8 border-t border-desc/10">
            {t("lastUpdate")} {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
