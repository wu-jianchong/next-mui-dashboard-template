// components/SidebarNavigationSection.tsx
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
import React from "react";

const navigationItems = [
  { label: "トップ", href: "/dashboard" },
  { label: "Web広場", href: "/community" },
  { label: "セミナー", href: "/seminars" },
  { label: "事務手続き", href: "/admin" },
  { label: "受信BOX", href: "/inbox", badge: 2 },
];

const bottomItems = [
  { label: "パスワード変更", href: "/settings/password" },
  { label: "ログアウト", href: "/api/logout", isLogout: true },
];

/**
 * サイドバーナビゲーション（Sidebar.tsx 完全再現）
 * - ルート高亮
 * - クリック跳转
 * - 未読角标
 * - 选中斜切效果
 */
export default function SidebarNavigationSection() {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        bgcolor: "white",
        height: "100%",
        overflowY: "auto",
        py: 1,
        px: 2,
      }}
    >
      <List sx={{ pt: 0 }}>
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Box key={item.label}>
              <ListItem disablePadding sx={{ mb: 0.5 }}>
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
                    // 选中斜切效果（右下角切掉）
                    clipPath: isActive
                      ? "polygon(0 0, 100% 0, 95% 100%, 0 100%)"
                      : "none",
                  }}
                >
                  <ListItemText
                    primary={item.label}
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
                        "& .MuiBadge-badge": { right: 3, top: 3 },
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>

              {item.label === "受信BOX" && (
                <Divider
                  sx={{ my: 1, mx: 2, bgcolor: "rgba(0, 0, 0, 0.12)" }}
                />
              )}
            </Box>
          );
        })}
      </List>

      {/* 底部功能区 */}
      <Box sx={{ px: 2, py: 3, borderTop: "1px solid #e0e0e0" }}>
        {bottomItems.map((item) => {
          const isActive = pathname === item.href;
          const isLogout = item.isLogout;

          return (
            <Box key={item.label} sx={{ mb: 1 }}>
              {isLogout ? (
                <form
                  action={item.href}
                  method="post"
                  style={{ width: "100%" }}
                >
                  <ListItemButton
                    type="submit"
                    sx={{
                      borderRadius: 0,
                      pl: 2,
                      py: 1,
                      color: "inherit",
                      "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
                    />
                  </ListItemButton>
                </form>
              ) : (
                <ListItemButton
                  component={Link}
                  href={item.href}
                  sx={{
                    borderRadius: 0,
                    pl: 2,
                    py: 1,
                    color: "inherit",
                    "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }}
                  />
                </ListItemButton>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
