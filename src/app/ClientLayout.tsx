// components/ClientLayout.tsx
"use client";

import { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { theme } from "@/theme/theme";
import NavigationSection from "@/components/layout/NavigationSection/NavigationSection";
import SidebarNavigationSection from "@/components/layout/SidebarNavigationSection/SidebarNavigationSection";

const drawerWidth = 240;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // < 900px
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          // 移除 minWidth: 1366 → 不再强制宽度
          // minWidth: 1366,
        }}
      >
        {/* ヘッダー */}
        <NavigationSection
          onMenuClick={isMobile ? handleDrawerToggle : undefined}
        />

        <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {/* PC：固定サイドバー */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: drawerWidth,
              flexShrink: 0,
            }}
          >
            <SidebarNavigationSection />
          </Box>

          {/* モバイル：抽屉サイドバー */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": { width: drawerWidth },
            }}
          >
            <SidebarNavigationSection />
          </Drawer>

          {/* 主内容：占满剩余空间 */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              overflowY: "auto",
              bgcolor: "#f5f5f5",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
