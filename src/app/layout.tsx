import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TITLE } from "@/global";
import Header from "@/components/common/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: TITLE,
  description: "物質量が絡む化学の計算を自動化するアプリケーション。",
  formatDetection: { telephone: false },
  openGraph: {
    siteName: TITLE,
    description: "物質量が絡む化学の計算を自動化するアプリケーション。",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Header />
        <noscript className='flex flex-col justify-center items-center'>
          <div className='loading'>読み込んでいます...</div>
          <div className='alert'>
            こちらがずっと表示される場合は
            <a
              className='hover:underline'
              target={"_blank"}
              rel='noopener noreferrer'
              href='https://support.google.com/admanager/answer/12654?hl=ja#:~:text=Google%20Chrome%20%E3%81%A7%20JavaScript%20%E3%82%92%E6%9C%89%E5%8A%B9%E3%81%AB%E3%81%99%E3%82%8B&text=%5B%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%E3%81%A8%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%5D%20%E3%82%92%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF,%E3%81%99%E3%82%8B%5D%20%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%BE%E3%81%99%E3%80%82'>
              JavaScriptを有効にしてください。
            </a>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
