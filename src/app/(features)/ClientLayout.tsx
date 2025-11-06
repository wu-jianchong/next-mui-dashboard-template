// src/app/ClientLayout.tsx
"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/theme/theme";
import Sidebar from "@/components/layout/Sidebar";
import AppBar from "@/components/layout/AppBar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      {/* 关键：加 suppressHydrationWarning */}
      <CssBaseline suppressHydrationWarning />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <AppBar />
          <main style={{ padding: "24px" }}>{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}
