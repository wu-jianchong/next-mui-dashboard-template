// src/app/(features)/ClientLayout.tsx
"use client";

import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "@/theme/theme";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const drawerWidth = 240;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* 固定 Header */}
        <Header />

        {/* 主内容区：从 Header 下开始 */}
        <Box sx={{ display: "flex", flex: 1, mt: "64px" }}>
          {/* 固定 Sidebar */}
          <Sidebar />

          {/* 内容区：与 Sidebar 对齐 */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              ml: `${drawerWidth}px`,
              width: `calc(100% - ${drawerWidth}px)`,
              overflowY: "auto",
              bgcolor: "#f8f9fa",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
