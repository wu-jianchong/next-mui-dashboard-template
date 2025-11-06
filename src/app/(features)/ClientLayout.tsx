// src/app/(features)/ClientLayout.tsx
"use client";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "@/theme/theme";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const drawerWidth = 240;

/**
 * メインレイアウト
 * - ヘッダー固定
 * - 左：サイドバー固定
 * - 右：コンテンツエリア（スクロール可）
 */
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* 全体コンテナ */}
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* 固定ヘッダー */}
        <Header />

        {/* 左右分割エリア */}
        <Box sx={{ display: "flex", flex: 1, mt: "64px" }}>
          {/* 左：固定メニュー */}
          <Sidebar />

          {/* 右：コンテンツ（スクロール可） */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              ml: `${drawerWidth}px`,
              width: `calc(100% - ${drawerWidth}px)`,
              overflowY: "auto",
              bgcolor: "#f5f5f5",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
