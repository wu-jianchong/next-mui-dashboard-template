// src/components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Badge,
  Divider,
} from "@mui/material";

/**
 * メニュー項目定義（アイコンなし）
 */
const menuItems = [
  { text: "トップ", href: "/dashboard" },
  { text: "Web広場", href: "/community" },
  { text: "セミナー", href: "/seminars" },
  { text: "事務手続き", href: "/admin" },
  { text: "受信BOX", href: "/inbox", badge: 2 },
  { text: "パスワード変更", href: "/settings/password" },
  { text: "ログアウト", href: "/api/logout", isLogout: true },
];

const drawerWidth = 240;

/**
 * サイドバーメニュー
 * - 無装飾（無边框、無圆角、無阴影）
 * - ヘッダー直下に密着
 * - アクティブ項目：深蓝背景＋白文字
 * - ホバー：浅灰背景
 */
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        bgcolor: "white",
        position: "fixed",
        top: 64, // Header 高度
        left: 0,
        height: "calc(100vh - 64px)",
        overflowY: "auto",
        // 完全移除：边框、圆角、阴影
        // border: "1px solid #e0e0e0",
        // borderRadius: 1,
        // boxShadow: 1,
        // 内边距最小化
        py: 1,
        px: 2,
      }}
    >
      <List sx={{ pt: 0, pb: 0 }}>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const isLogout = item.isLogout;

          return (
            <Box key={item.text}>
              <ListItem disablePadding sx={{ mb: 0.5 }}>
                {isLogout ? (
                  <form
                    action={item.href}
                    method="post"
                    style={{ width: "100%" }}
                  >
                    <ListItemButton
                      type="submit"
                      sx={{
                        borderRadius: 0, // 无圆角
                        bgcolor: isActive ? "#003087" : "transparent",
                        color: isActive ? "white" : "inherit",
                        "&:hover": {
                          bgcolor: isActive ? "#00205b" : "rgba(0, 0, 0, 0.04)",
                        },
                        pl: 2,
                        py: 1,
                      }}
                    >
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: isActive ? 600 : 500,
                        }}
                      />
                    </ListItemButton>
                  </form>
                ) : (
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    sx={{
                      borderRadius: 0,
                      bgcolor: isActive ? "#003087" : "transparent",
                      color: isActive ? "white" : "inherit",
                      "&:hover": {
                        bgcolor: isActive ? "#00205b" : "rgba(0, 0, 0, 0.04)",
                      },
                      pl: 2,
                      py: 1,
                    }}
                  >
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: isActive ? 600 : 500,
                      }}
                    />
                    {item.badge !== undefined && (
                      <Badge
                        badgeContent={item.badge}
                        color="error"
                        sx={{
                          ml: 1,
                          "& .MuiBadge-badge": { right: -3, top: 3 },
                        }}
                      />
                    )}
                  </ListItemButton>
                )}
              </ListItem>

              {item.text === "受信BOX" && (
                <Divider
                  sx={{ my: 1, mx: 2, bgcolor: "rgba(0, 0, 0, 0.12)" }}
                />
              )}
            </Box>
          );
        })}
      </List>
    </Box>
  );
}
