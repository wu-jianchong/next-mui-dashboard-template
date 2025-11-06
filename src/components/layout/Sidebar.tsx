// src/components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar, // ← 追加：ヘッダー分のスペース確保用
  Divider,
  Box,
} from "@mui/material";
import {
  Home,
  Forum,
  School,
  Description,
  Inbox,
  Key,
  Logout,
} from "@mui/icons-material";

const menuItems = [
  { text: "トップ", icon: <Home />, href: "/dashboard" },
  { text: "Web広場", icon: <Forum />, href: "/community" },
  { text: "セミナー", icon: <School />, href: "/seminars" },
  { text: "事務手続き", icon: <Description />, href: "/admin" },
  { text: "受信BOX", icon: <Inbox />, href: "/inbox", badge: 2 },
  { text: "パスワード変更", icon: <Key />, href: "/settings/password" },
];

const drawerWidth = 240;

/**
 * サイドバーメニュー
 * - 左側に固定
 * - ヘッダー下から開始
 * - スクロール対応
 */
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#0033A0",
          color: "white",
          position: "fixed",
          top: 64, // ヘッダー高さ
          height: "calc(100vh - 64px)",
          overflowY: "auto",
        },
      }}
    >
      <Toolbar /> {/* ヘッダー分のスペース確保 */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={pathname === item.href}
              sx={{
                color: "white",
                "&.Mui-selected": { backgroundColor: "rgba(255,255,255,0.2)" },
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {item.badge && (
                <Box
                  sx={{
                    bgcolor: "error.main",
                    color: "white",
                    borderRadius: "50%",
                    width: 20,
                    height: 20,
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: 1,
                  }}
                >
                  {item.badge}
                </Box>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />
      {/* ログアウト */}
      <List>
        <ListItem disablePadding>
          <form action="/api/logout" method="post" style={{ width: "100%" }}>
            <ListItemButton type="submit" sx={{ color: "white" }}>
              <ListItemIcon sx={{ color: "white" }}>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="ログアウト" />
            </ListItemButton>
          </form>
        </ListItem>
      </List>
    </Drawer>
  );
}
