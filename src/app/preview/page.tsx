"use client"; // これも必須！

// src/app/test/page.tsx
import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import NotificationSection from "@/components/fs-kt/NotificationSection/NotificationSection";
import CarouselListSection from "@/components/fs-kt/CarouselListSection/CarouselListSection";
import NewsFeedSection from "@/components/fs-kt/NewsFeedSection/NewsFeedSection";

// テーマ
const theme = createTheme({
  typography: {
    fontFamily: '"Noto Sans JP", "Roboto", sans-serif',
  },
});

export default function TestPage() {
  return (
    <>
      {/* フォント読み込み */}
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@600&display=swap"
        rel="stylesheet"
      />

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          style={{
            padding: 40,
            background: "#f9f9f9",
            minHeight: "100vh",
            fontFamily: "'Noto Sans JP', sans-serif",
          }}
        >
          <main style={{ padding: 40 }}>
            <NotificationSection />
          </main>
          <main style={{ padding: 40 }}>
            <CarouselListSection />
          </main>
          <main style={{ padding: 40 }}>
            <NewsFeedSection />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
