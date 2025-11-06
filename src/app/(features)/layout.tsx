// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "@/app/(features)/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "みずほ信託銀行 証券代行お客さまサイト",
  description: "Next.js + MUI による企業向け管理画面",
};

/**
 * ルートレイアウト
 * - HTML構造とフォント設定
 * - ClientLayout を子としてラップ
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
