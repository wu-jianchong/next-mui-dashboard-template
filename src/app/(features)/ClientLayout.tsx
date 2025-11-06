// src/app/(features)/ClientLayout.tsx
"use client";

import { useState } from "react";
import { ThemeProvider, CssBaseline, Box, Drawer } from "@mui/material";
import { theme } from "@/theme/theme";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const drawerWidth = 240;
const headerHeight = 80;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* ヘッダー（ハンバーガー付き） */}
        <Header onMenuClick={handleDrawerToggle} />

        {/* 主内容区 */}
        <Box sx={{ display: "flex", flex: 1, mt: `${headerHeight}px` }}>
          {/* PC：固定サイドバー */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Sidebar />
          </Box>

          {/* モバイル：抽屉サイドバー */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                top: `${headerHeight}px`,
                height: `calc(100vh - ${headerHeight}px)`,
              },
            }}
          >
            <Sidebar />
          </Drawer>

          {/* 右：コンテンツエリア */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              ml: { md: `${drawerWidth}px` },
              width: { md: `calc(100% - ${drawerWidth}px)` },
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
