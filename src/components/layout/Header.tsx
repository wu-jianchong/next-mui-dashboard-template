// src/components/layout/Header.tsx
"use client";

import { AppBar, Toolbar, Typography, Box, Avatar } from "@mui/material";

/**
 * ヘッダーコンポーネント
 * - 画面上部に固定表示
 * - サイトタイトルとユーザー情報を表示
 */
export default function Header() {
  return (
    <AppBar
      position="fixed" // 固定表示
      color="transparent"
      elevation={1}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1, // Drawerより手前
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* 左側：サイトタイトル */}
        <Box>
          <Typography variant="h6" fontWeight="bold" color="primary">
            みずほ信託銀行
          </Typography>
          <Typography variant="caption" color="text.secondary">
            証券代行お客さまサイト
          </Typography>
        </Box>

        {/* 右側：ユーザー情報 */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box textAlign="right">
            <Typography variant="body2" color="text.secondary">
              ○○○株式会社　○○○○○様
            </Typography>
            <Typography variant="caption" color="text.secondary">
              前回ログイン日時　2025/08/27 12:13:14
            </Typography>
          </Box>
          <Avatar sx={{ bgcolor: "#0033A0" }}>客</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
